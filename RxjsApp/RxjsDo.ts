var Rx = require('rxjs/Rx');

var source = Rx.Observable.range(0, 3)
    .do(
    function (x) { console.log('Do Next:', x); },
    function (err) { console.log('Do Error:', err); },
    function () { console.log('Do Completed'); }
    );

/* Using an observer */
//var observer = Rx.Observer.create(
//    function (x) { console.log('Do Next: %s', x); },
//    function (err) { console.log('Do Error: %s', err); },
//    function () { console.log('Do Completed'); }
//);
//var source = Rx.Observable.range(0, 3)
//    .do(observer);

export class doPoc {

    test() {
        var subscription = source.subscribe(
            function (x) {
                console.log('Next: %s', x);
            },
            function (err) {
                console.log('Error: %s', err);
            },
            function () {
                console.log('Completed');
            });
    }
}