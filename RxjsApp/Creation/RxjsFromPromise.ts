var Promise = require('promise');
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

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
        const source = Observable.of(true, false);
        const example = source.mergeMap(val =>
            Observable
                //turn promise into observable
                .fromPromise(myPromise(val))
                //catch and gracefully handle rejections
                .catch(error => Observable.of(`Error: ${error}`))
        );
        //output: 'Error: Rejected!', 'Resolved!'
        const subscribe = example.subscribe(val => console.log(val));
    }
}