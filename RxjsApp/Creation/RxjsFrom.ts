var Promise = require('promise');
var Rx = require('rxjs/Rx');
//import Rx = require('rxjs/Rx');

export class FromPoc {
    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        //emit array as a sequence of values
        const arraySource = Rx.Observable.from([1, 2, 3, 4, 5]);
        //output: 1,2,3,4,5
        const subscribe = arraySource.subscribe(val => console.log(val));
    }

    func2() {
        //emit result of promise
        const promiseSource = Rx.Observable.from(
            new Promise(resolve => resolve('Hello World!'))
        );
        //output: 'Hello World'
        const subscribe = promiseSource.subscribe(val => console.log(val));
    }

    func3() {
        ////works on js collections
        //const map = new l
        //map.set(1, 'Hi');
        //map.set(2, 'Bye');

        //const mapSource = Rx.Observable.from(map);
        ////output: [1, 'Hi'], [2, 'Bye']
        //const subscribe = mapSource.subscribe(val => console.log(val));
    }

}