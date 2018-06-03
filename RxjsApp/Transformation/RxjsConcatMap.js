"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ConcatMapPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 'Hello' and 'Goodbye'
        const source = rxjs_1.of("Hello", "Goodbye");
        // map value from source into inner observable, when complete emit result and move to next
        const example = source.pipe(operators_1.concatMap((val) => rxjs_1.of(`${val} World!`)));
        // output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        const subscribe = example.subscribe((val) => console.log("Example One:", val));
    }
    func2() {
        const concatMapSub = rxjs_1.of(2000, 1000)
            .pipe(operators_1.concatMap((v) => rxjs_1.of(v).pipe(operators_1.delay(v))))
            .subscribe((v) => console.log("concatMap:", v));
        const mergeMapSub = rxjs_1.of(2000, 1000)
            .pipe(operators_1.mergeMap((v) => rxjs_1.of(v).pipe(operators_1.delay(v))))
            .subscribe((v) => console.log("mergeMap:", v));
    }
}
exports.ConcatMapPoc = ConcatMapPoc;
//# sourceMappingURL=RxjsConcatMap.js.map