import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/Observable/of';
// import 'rxjs/add/Observable/interval';
// import 'rxjs/add/operator/take'
import 'rxjs/add/operator/ignoreElements'



export class ignoreElementPoc {

    test() {
        this.func1();
        this.func2();
    }

    func1() {
        //emit value every 100ms
        const source = Observable.interval(100);
        //ignore everything but complete
        const example = source.take(5).ignoreElements();
        //output: "COMPLETE!"
        const subscribe = example.subscribe(
            val => console.log(`NEXT: ${val}`),
            val => console.log(`ERROR: ${val}`),
            () => console.log('COMPLETE!')
        );
    }

    func2() {
        //emit value every 100ms
        const source = Observable.interval(100);
        //ignore everything but error
        const error = source
            .flatMap(val => {
                if (val === 4) {
                    return Observable.throw(`ERROR AT ${val}`);
                }
                return Observable.of(val);
            })
            .ignoreElements();
        //output: "ERROR: ERROR AT 4"
        const subscribe = error.subscribe(
            val => console.log(`NEXT: ${val}`),
            val => console.log(`ERROR: ${val}`),
            () => console.log('SECOND COMPLETE!')
        );
    }


}