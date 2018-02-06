import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/zip';


export class RetryWhenPoc {
    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        //emit value every 1s
        const source = Observable.interval(1000);
        const example = source
            .map(val => {
                if (val > 5) {
                    //error will be picked up by retryWhen
                    throw val;
                }
                return val;
            })
            .retryWhen(errors =>
                errors
                    //log error message
                    .do(val => console.log(`Value ${val} was too high!`))
                    //restart in 5 seconds
                    .delayWhen(val => Observable.timer(val * 1000))
            );
        /*
          output: 
          0
          1
          2
          3
          4
          5
          "Value 6 was too high!"
          --Wait 5 seconds then repeat
        */
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        //emit value every 1s
        const source = Observable.interval(1000);
        const example = source
            .map(val => {
                if (val > 2) {
                    //error will be picked up by retryWhen
                    throw val;
                }
                return val;
            })
            .retryWhen(attempts => {
                return attempts.zip(Observable.range(1, 4)).mergeMap(([error, i]) => {
                    if (i > 3) {
                        return Observable.throw(error);
                    }
                    console.log(`Wait ${i} seconds, then retry!`);
                    return Observable.timer(i * 1000);
                });
            })
            .catch(_ => Observable.of('Ouch, giving up!'));

        const subscribe = example.subscribe(val => console.log(val));
    }

}