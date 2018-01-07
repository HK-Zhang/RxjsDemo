var Promise = require('promise');
var Rx = require('rxjs/Rx');
//import Rx = require('rxjs/Rx');

export class FromPromisePoc {
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
        const source = Rx.Observable.of(true, false);
        const example = source.mergeMap(val =>
            Rx.Observable
                //turn promise into observable
                .fromPromise(myPromise(val))
                //catch and gracefully handle rejections
                .catch(error => Rx.Observable.of(`Error: ${error}`))
        );
        //output: 'Error: Rejected!', 'Resolved!'
        const subscribe = example.subscribe(val => console.log(val));
    }
}