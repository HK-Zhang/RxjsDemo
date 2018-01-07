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
        this.func1();
    }

    func1() {
        const source = Rx.Observable.of(1, 2, 3, 4, 5);
        //transparently log values from source with 'do'
        const example = source
            .do(val => console.log(`BEFORE MAP: ${val}`))
            .map(val => val + 10)
            .do(val => console.log(`AFTER MAP: ${val}`));
        //'do' does not transform values
        //output: 11...12...13...14...15
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
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