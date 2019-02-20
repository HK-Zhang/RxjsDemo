import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throttle'
var Promise = require('promise');


export class throttlePoc {

    test() {
        this.func1();
        // this.func2();
    }

    func1() {
        //emit value every 1 second
        const source = Observable.interval(1000);
        //throttle for 2 seconds, emit latest value
        const example = source.throttle(val => Observable.interval(2000));
        //output: 0...3...6...9
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        //emit value every 1 second
        const source = Observable.interval(1000);
        //incrementally increase the time to resolve based on source
        const promise = val =>
            new Promise(resolve =>
                setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
            );
        //when promise resolves emit item from source
        const example = source
            .throttle(promise)
            .map(val => `Throttled off Promise: ${val}`);

        const subscribe = example.subscribe(val => console.log(val));
    }


}