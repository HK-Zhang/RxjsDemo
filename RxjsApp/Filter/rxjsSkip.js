"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class SkipPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit every 1s
        const source = rxjs_1.interval(1000);
        // skip the first 5 emitted values
        const example = source.pipe(operators_1.skip(5));
        // output: 5...6...7...8........
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const numArrayObs = rxjs_1.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        // 3,4,5...
        const skipObs = numArrayObs.pipe(operators_1.skip(2))
            .subscribe(console.log);
        // 3,4,5...
        const filterObs = numArrayObs.pipe(operators_1.filter((val, index) => index > 1))
            .subscribe(console.log);
        // Same output!
    }
}
exports.SkipPoc = SkipPoc;
//# sourceMappingURL=rxjsSkip.js.map