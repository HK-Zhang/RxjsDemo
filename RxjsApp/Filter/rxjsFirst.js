"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class FirstPoc {
    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }
    func1() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // no arguments, emit first value
        const example = source.pipe(operators_1.first());
        // output: "First value: 1"
        const subscribe = example.subscribe((val) => console.log(`First value: ${val}`));
    }
    func2() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // emit first item to pass test
        const example = source.pipe(operators_1.first((num) => num === 5));
        // output: "First to pass test: 5"
        const subscribe = example.subscribe((val) => console.log(`First to pass test: ${val}`));
    }
    func3() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // using optional projection function
        const example = source.pipe(operators_1.first((num) => num % 2 === 0, (result, index) => `First even: ${result} is at index: ${index}`));
        // output: "First even: 2 at index: 1"
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func4() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // no value will pass, emit default
        const example = source.pipe(operators_1.first((val) => val > 5, "Nothing"));
        // output: 'Nothing'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.FirstPoc = FirstPoc;
//# sourceMappingURL=rxjsFirst.js.map