var Promise = require('promise');
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export class CatchPoc {
    test() {
        //this.func1();
        // this.func2();
        this.func3();
    }

    func1() {
        //emit error
        const source = Observable.throw('This is an error!');
        //gracefully handle error, returning observable with error message
        const example = source.catch(val => Observable.of(`I caught: ${val}`));
        //output: 'I caught: This is an error'
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        //create promise that immediately rejects
        const myBadPromise = () =>
            new Promise((resolve, reject) => reject('Rejected!'));
        //emit single value after 1 second
        const source = Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        const example = source.flatMap(() =>
            Observable.fromPromise(myBadPromise()).catch(error =>
                Observable.of(`Bad Promise: ${error}`)
            )
        );
        //output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe(val => console.log(val));
    }

    func3() {
        //create promise that immediately rejects
        const myBadPromise = () =>
            new Promise((resolve, reject) => resolve('Approve!'));
        //emit single value after 1 second
        const source = Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        const example = source.flatMap(() =>
            Observable.fromPromise(myBadPromise()).catch(error =>
                Observable.of(`Bad Promise: ${error}`)
            )
        );
        //output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe(val => console.log(val));
    }
}