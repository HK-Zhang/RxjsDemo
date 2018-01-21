"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/single");
class singlePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        //emit (1,2,3,4,5)
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5]);
        //emit one item that matches predicate
        const example = source.single(val => val === 4);
        //output: 4
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.singlePoc = singlePoc;
//# sourceMappingURL=rxjsSingle.js.map