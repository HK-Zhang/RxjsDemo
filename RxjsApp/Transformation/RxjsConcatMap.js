"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class ConcatMapPoc {
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
            .subscribe(v => console.log('concatMap:', v));
        const mergeMapSub = Rx.Observable.of(2000, 1000)
            .mergeMap(v => Rx.Observable.of(v).delay(v))
            .subscribe(v => console.log('mergeMap:', v));
    }
}
exports.ConcatMapPoc = ConcatMapPoc;
//# sourceMappingURL=RxjsConcatMap.js.map