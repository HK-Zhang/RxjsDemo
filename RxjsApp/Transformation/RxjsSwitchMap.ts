var Rx = require('rxjs/Rx');



let createInnerObservable = (id) =>
    Rx.Observable.create(observer => {
        console.log('%ccreated inner observable:', 'color:blue;', id);

        let handler = setInterval(() => {
            observer.next('inner:' + id);
        }, 3000);

        return () => {
            clearInterval(handler);
            console.log('%ccanceled inner observable:', 'color:red;', id);
        };
    });

export class SwithMapPoc {

    test() {
        //this.func();
        //this.func2();
        this.func3();
    }

    func() {
        Rx.Observable.timer(0, 10000)
            .do(id => {
                console.log('%carrived outer observable:', 'color:green;', id);
            })
            .switchMap(id => createInnerObservable(id))
            .subscribe(innerValue => console.log('subscribed value:', innerValue));
    }

    func2() {
        //emit immediately, then every 5s
        const source = Rx.Observable.timer(0, 5000);
        //switch to new inner observable when source emits, emit items that are emitted
        const example = source.switchMap(() => Rx.Observable.interval(500));
        //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
        const subscribe = example.subscribe(val => console.log(val));
    }

    func3() {
        //emit immediately, then every 5s
        const source = Rx.Observable.timer(0, 5000);
        //switch to new inner observable when source emits, invoke project function and emit values
        const example = source.switchMap(
            () => Rx.Observable.interval(2000),
            (outerValue, innerValue, outerIndex, innerIndex) => ({
                outerValue,
                innerValue,
                outerIndex,
                innerIndex
            })
        );
        /*
            Output:
            {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
            {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
            {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
            {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
        */
        const subscribe = example.subscribe(val => console.log(val));
    }
}