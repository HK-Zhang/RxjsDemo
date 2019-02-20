"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/skipUntil");
class skipUntilPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        //emit every 1s
        const source = Observable_1.Observable.interval(1000);
        //skip emitted values from source until inner observable emits (6s)
        const example = source.skipUntil(Observable_1.Observable.timer(6000));
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.skipUntilPoc = skipUntilPoc;
//# sourceMappingURL=rxjsSkipUntil.js.map