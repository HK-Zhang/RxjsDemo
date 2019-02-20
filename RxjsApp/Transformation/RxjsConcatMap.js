"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/concatMap");
const Observable_1 = require("rxjs/Observable");
class ConcatMapPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 'Hello' and 'Goodbye'
        const source = Observable_1.Observable.of("Hello", "Goodbye");
        // map value from source into inner observable, when complete emit result and move to next
        const example = source.concatMap((val) => Observable_1.Observable.of(`${val} World!`));
        // output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        const subscribe = example.subscribe((val) => console.log("Example One:", val));
    }
    func2() {
        const concatMapSub = Observable_1.Observable.of(2000, 1000)
            .concatMap((v) => Observable_1.Observable.of(v).delay(v))
            .subscribe((v) => console.log("concatMap:", v));
        const mergeMapSub = Observable_1.Observable.of(2000, 1000)
            .mergeMap((v) => Observable_1.Observable.of(v).delay(v))
            .subscribe((v) => console.log("mergeMap:", v));
    }
}
exports.ConcatMapPoc = ConcatMapPoc;
//# sourceMappingURL=RxjsConcatMap.js.map