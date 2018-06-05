"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ReducePoc {
    test() {
        this.func1();
    }
    func1() {
        const source = rxjs_1.of(1, 2, 3, 4);
        const example = source.pipe(operators_1.reduce((acc, val) => acc + val));
        const example2 = source.pipe(operators_1.scan((acc, val) => acc + val));
        // output: Sum: 10'
        const subscribe = example.subscribe((val) => console.log("Sum:", val));
        const subscribe2 = example2.subscribe((val) => console.log("Accumulated total:", val));
    }
}
exports.ReducePoc = ReducePoc;
//# sourceMappingURL=rxjsReduce.js.map