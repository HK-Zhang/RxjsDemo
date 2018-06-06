"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class SamplePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit value every 1s
        const source = rxjs_1.interval(1000);
        // sample last emitted value from source every 2s
        const example = source.pipe(operators_1.sample(rxjs_1.interval(2000)));
        // output: 2..4..6..8..
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.zip(
        // emit 'Joe', 'Frank' and 'Bob' in sequence
        rxjs_1.from(["Joe", "Frank", "Bob"]), 
        // emit value every 2s
        rxjs_1.interval(2000));
        // sample last emitted value from source every 2.5s
        const example = source.pipe(operators_1.sample(rxjs_1.interval(2500)));
        // output: ["Joe", 0]...["Frank", 1]...........
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.SamplePoc = SamplePoc;
//# sourceMappingURL=rxjsSample.js.map