import * as Collections from 'typescript-collections';
import { Observable } from 'rxjs/Observable';
var Promise = require('promise');
// var Rx = require('rxjs/Rx');
//import Rx = require('rxjs/Rx');

export class FromPoc {
    test() {
        //this.func1();
        //this.func2();
        //this.func3();
        this.func4();
    }

    func1() {
        //emit array as a sequence of values
        const arraySource = Observable.from([1, 2, 3, 4, 5]);
        //output: 1,2,3,4,5
        const subscribe = arraySource.subscribe(val => console.log(val));
    }

    func2() {
        //emit result of promise
        const promiseSource = Observable.from(
            new Promise(resolve => resolve('Hello World!'))
        );
        //output: 'Hello World'
        const subscribe = promiseSource.subscribe(val => console.log(val));
    }

    func3() {
        //emit string as a sequence
        const source = Observable.from('Hello World');
        //output: 'H','e','l','l','o',' ','W','o','r','l','d'
        const subscribe = source.subscribe(val => console.log(val));
    }

    func4() {
        let map: { [key: number]: string; length: number; } = {length:0};
        map[0] = 'Hi';
        map[1] = 'Bye';
        map.length=2;

        const mapSource = Observable.from(map);
        //output: [1, 'Hi'], [2, 'Bye']
        const subscribe = mapSource.subscribe(val => console.log(val));
    }
}