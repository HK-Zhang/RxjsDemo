"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
class CatchPoc {
    test() {
        //this.func1();
        // this.func2();
        this.func3();
    }
    func1() {
        //emit error
        const source = Observable_1.Observable.throw('This is an error!');
        //gracefully handle error, returning observable with error message
        const example = source.catch(val => Observable_1.Observable.of(`I caught: ${val}`));
        //output: 'I caught: This is an error'
        const subscribe = example.subscribe(val => console.log(val));
    }
    func2() {
        //create promise that immediately rejects
        const myBadPromise = () => new Promise((resolve, reject) => reject('Rejected!'));
        //emit single value after 1 second
        const source = Observable_1.Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        const example = source.flatMap(() => Observable_1.Observable.fromPromise(myBadPromise()).catch(error => Observable_1.Observable.of(`Bad Promise: ${error}`)));
        //output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe(val => console.log(val));
    }
    func3() {
        //create promise that immediately rejects
        const myBadPromise = () => new Promise((resolve, reject) => resolve('Approve!'));
        //emit single value after 1 second
        const source = Observable_1.Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        const example = source.flatMap(() => Observable_1.Observable.fromPromise(myBadPromise()).catch(error => Observable_1.Observable.of(`Bad Promise: ${error}`)));
        //output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.CatchPoc = CatchPoc;
//# sourceMappingURL=RxjsCatchPoc.js.map