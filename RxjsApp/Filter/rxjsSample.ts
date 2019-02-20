import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/zip';
import 'rxjs/add/operator/sample'



export class samplePoc {

    test() {
        this.func1();
        // this.func2();
    }

    func1() {
        //emit value every 1s
        const source = Observable.interval(1000);
        //sample last emitted value from source every 2s
        const example = source.sample(Observable.interval(2000));
        //output: 2..4..6..8..
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        const source = Observable.zip(
            //emit 'Joe', 'Frank' and 'Bob' in sequence
            Observable.from(['Joe', 'Frank', 'Bob']),
            //emit value every 2s
            Observable.interval(2000)
          );
          //sample last emitted value from source every 2.5s
          const example = source.sample(Observable.interval(2500));
          //output: ["Joe", 0]...["Frank", 1]...........
          const subscribe = example.subscribe(val => console.log(val));
    }


}