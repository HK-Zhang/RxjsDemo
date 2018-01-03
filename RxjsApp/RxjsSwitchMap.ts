var Rx = require('rxjs/Rx');

Rx.Observable.timer(0, 10000)
    .do(id => {
        console.groupEnd();
        console.group('%carrived outer observable:', 'color:green;', id);
    })
    .switchMap(id => createInnerObservable(id))
    .subscribe(innerValue => console.log('subscribed value:', innerValue))

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