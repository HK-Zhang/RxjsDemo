var Rx = require('rxjs/Rx');

export class MergeMapPoc {
    test() {
        this.func1();
    }

    func1() {
        //emit value every 1s
        var letters = Rx.Observable.of('a', 'b', 'c');
        var result = letters.mergeMap(x =>
            Rx.Observable.interval(1000).map(i => x + i).take(5),
            (oV, iV, oI, iI) => {
                // console.log("innerValue", iV);
                return "inner" + iV;
            }, 2
        );
        result.subscribe(x => console.log(x));
    }

    func2() {
        //emit value every 1s
        const source = Rx.Observable.interval(1000);

        const example = source.mergeMap(
            //project
            val => Rx.Observable.interval(5000).take(2),
            //resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            //concurrent
            2
        );
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        const subscribe = example.subscribe(val => console.log(val));
    }
}