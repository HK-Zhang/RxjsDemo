var Promise = require('promise');
var Rx = require('rxjs/Rx');

var tfx = function (item, index) {
    return item * 2;
};

export class CatchPoc {
    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        //emit error
        const source = Rx.Observable.throw('This is an error!');
        //gracefully handle error, returning observable with error message
        const example = source.catch(val => Rx.Observable.of(`I caught: ${val}`));
        //output: 'I caught: This is an error'
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        //create promise that immediately rejects
        const myBadPromise = () =>
            new Promise((resolve, reject) => reject('Rejected!'));
        //emit single value after 1 second
        const source = Rx.Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        const example = source.flatMap(() =>
            Rx.Observable.fromPromise(myBadPromise()).catch(error =>
                Rx.Observable.of(`Bad Promise: ${error}`)
            )
        );
        //output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe(val => console.log(val));
    }

}