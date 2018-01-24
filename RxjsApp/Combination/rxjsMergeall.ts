import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeAll'
var Promise = require('promise');

export class mergeAllPoc {

    test() {
        // this.func1();
        this.func2();
    }

    func1() {
        const myPromise = val =>
            new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
        //emit 1,2,3
        const source = Observable.of(1, 2, 3);

        const example = source
            //map each value to promise
            .map(val => myPromise(val))
            //emit result from source
            .mergeAll();

        /*
          output:
          "Result: 1"
          "Result: 2"
          "Result: 3"
        */
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {

        const interval = Observable.interval(500).take(5);

        /*
          interval is emitting a value every 0.5s.  This value is then being mapped to interval that 
          is delayed for 1.0s.  The mergeAll operator takes an optional argument that determines how 
          many inner observables to subscribe to at a time.  The rest of the observables are stored 
          in a backlog waiting to be subscribe.
        */
        const example = interval
            .map(val => interval.delay(1000).take(3))
            .mergeAll(2)
            .subscribe(val => console.log(val));
        /*
          The subscription is completed once the operator emits all values.
        */
    }

}