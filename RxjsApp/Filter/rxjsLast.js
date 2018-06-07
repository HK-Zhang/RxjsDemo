"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class LastPoc {
    test() {
        this.func1();
        this.func2();
        this.func3();
    }
    func1() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // no arguments, emit last value
        const example = source.pipe(operators_1.last());
        // output: "Last value: 5"
        const subscribe = example.subscribe((val) => console.log(`Last value: ${val}`));
    }
    func2() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // emit last even number
        const exampleTwo = source.pipe(operators_1.last((num) => num % 2 === 0));
        // output: "Last to pass test: 4"
        const subscribeTwo = exampleTwo.subscribe((val) => console.log(`Last to pass test: ${val}`));
    }
    func3() {
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // supply an option projection function for the second parameter
        const exampleTwo = source.pipe(operators_1.last((v) => v > 4, (v) => `The highest emitted number was ${v}`));
        // output: 'The highest emitted number was 5'
        const subscribeTwo = exampleTwo.subscribe((val) => console.log(val));
    }
}
exports.LastPoc = LastPoc;
//# sourceMappingURL=rxjsLast.js.map