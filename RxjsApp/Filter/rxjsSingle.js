"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class SinglePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit (1,2,3,4,5)
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // emit one item that matches predicate
        const example = source.pipe(operators_1.single((val) => val === 4));
        // output: 4
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.SinglePoc = SinglePoc;
//# sourceMappingURL=rxjsSingle.js.map