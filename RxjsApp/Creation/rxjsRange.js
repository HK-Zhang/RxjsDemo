"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
class RangePoc {
    test() {
        this.func1();
        //this.func2();
    }
    func1() {
        //emit 1-10 in sequence
        const source = Observable_1.Observable.range(1, 10);
        //output: 1,2,3,4,5,6,7,8,9,10
        const example = source.subscribe(val => console.log(val));
    }
}
exports.RangePoc = RangePoc;
//# sourceMappingURL=rxjsRange.js.map