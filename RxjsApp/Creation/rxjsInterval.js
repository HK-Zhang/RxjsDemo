"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
class IntervalPoc {
    test() {
        this.func1();
        //this.func2();
    }
    func1() {
        //emit value in sequence every 1 second
        const source = Observable_1.Observable.interval(1000);
        //output: 0,1,2,3,4,5....
        const subscribe = source.subscribe(val => console.log(val));
    }
}
exports.IntervalPoc = IntervalPoc;
//# sourceMappingURL=rxjsInterval.js.map