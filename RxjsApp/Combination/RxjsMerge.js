"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MergePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit every 2.5 seconds
        const first = rxjs_1.interval(2500);
        // emit every 2 seconds
        const second = rxjs_1.interval(2000);
        // emit every 1.5 seconds
        const third = rxjs_1.interval(1500);
        // emit every 1 second
        const fourth = rxjs_1.interval(1000);
        // emit outputs from one observable
        const example = rxjs_1.merge(first.pipe(operators_1.mapTo("FIRST!")), second.pipe(operators_1.mapTo("SECOND!")), third.pipe(operators_1.mapTo("THIRD")), fourth.pipe(operators_1.mapTo("FOURTH")));
        // output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit every 2.5 seconds
        const first = rxjs_1.interval(2500);
        // emit every 1 second
        const second = rxjs_1.interval(1000);
        // used as instance method
        // const example = first.pipe(mergeOp(second));
        const example = rxjs_1.merge(first, second);
        // output: 0,1,0,2....
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.MergePoc = MergePoc;
//# sourceMappingURL=RxjsMerge.js.map