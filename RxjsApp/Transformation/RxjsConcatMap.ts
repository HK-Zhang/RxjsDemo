var Rx = require('rxjs/Rx');

export class ConcatMapPoc {
    test() {
        //this.func1();
        this.func2();
    }

    func1() {
        //emit 'Hello' and 'Goodbye'
        const source = Rx.Observable.of('Hello', 'Goodbye');
        // map value from source into inner observable, when complete emit result and move to next
        const example = source.concatMap(val => Rx.Observable.of(`${val} World!`));
        //output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        const subscribe = example.subscribe(val => console.log('Example One:', val));
    }

    func2() {
        const concatMapSub = Rx.Observable.of(2000, 1000)
            .concatMap(v => Rx.Observable.of(v).delay(v))
            // concatMap: 2000, concatMap: 1000
            .subscribe(v => console.log('concatMap:', v));

        const mergeMapSub = Rx.Observable.of(2000, 1000)
            .mergeMap(v => Rx.Observable.of(v).delay(v))
            // mergeMap: 1000, mergeMap: 2000
            .subscribe(v => console.log('mergeMap:', v));
    }
}