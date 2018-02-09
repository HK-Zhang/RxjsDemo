"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/reduce");
const Observable_1 = require("rxjs/Observable");
class ReducePoc {
    test() {
        this.func1();
    }
    func1() {
        const source = Observable_1.Observable.of(1, 2, 3, 4);
        const example = source.reduce((acc, val) => acc + val);
        // output: Sum: 10'
        const subscribe = example.subscribe((val) => console.log("Sum:", val));
    }
}
exports.ReducePoc = ReducePoc;
//# sourceMappingURL=rxjsReduce.js.map