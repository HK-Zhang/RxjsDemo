"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class SkipWhilePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit every 1s
        const source = rxjs_1.interval(1000);
        // skip emitted values from source while value is less than 5
        const example = source.pipe(operators_1.skipWhile((val) => val < 5));
        // output: 5...6...7...8........
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.SkipWhilePoc = SkipWhilePoc;
//# sourceMappingURL=rxjsSkipWhile.js.map