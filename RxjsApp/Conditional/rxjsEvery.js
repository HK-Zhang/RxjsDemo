"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class EveryPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 5 values
        const source = rxjs_1.of(1, 2, 3, 4, 5);
        // is every value even?
        const isEveryEven = operators_1.every((val) => val % 2 === 0);
        const example = source.pipe(isEveryEven);
        // output: false
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit 5 values
        const allEvens = rxjs_1.of(2, 4, 6, 8, 10);
        // is every value even?
        const isEveryEven = operators_1.every((val) => val % 2 === 0);
        const example = allEvens.pipe(isEveryEven);
        // output: true
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.EveryPoc = EveryPoc;
//# sourceMappingURL=rxjsEvery.js.map