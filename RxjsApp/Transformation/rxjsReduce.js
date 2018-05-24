"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/reduce");
require("rxjs/add/operator/scan");
const Observable_1 = require("rxjs/Observable");
class ReducePoc {
    test() {
        this.func1();
    }
    func1() {
        const source = Observable_1.Observable.of(1, 2, 3, 4);
        const example = source.reduce((acc, val) => acc + val);
        const example2 = source.scan((acc, val) => acc + val);
        // output: Sum: 10'
        const subscribe = example.subscribe((val) => console.log("Sum:", val));
        const subscribe2 = example2.subscribe((val) => console.log("Accumulated total:", val));
    }
}
exports.ReducePoc = ReducePoc;
//# sourceMappingURL=rxjsReduce.js.map