"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
class FromPromisePoc {
    test() {
        this.func1();
    }
    func1() {
        //example promise that will resolve or reject based on input
        const myPromise = willReject => {
            return new Promise((resolve, reject) => {
                if (willReject) {
                    reject('Rejected!');
                }
                resolve('Resolved!');
            });
        };
        //emit true, then false
        const source = Observable_1.Observable.of(true, false);
        const example = source.mergeMap(val => Observable_1.Observable
            .fromPromise(myPromise(val))
            .catch(error => Observable_1.Observable.of(`Error: ${error}`)));
        //output: 'Error: Rejected!', 'Resolved!'
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.FromPromisePoc = FromPromisePoc;
//# sourceMappingURL=RxjsFromPromise.js.map