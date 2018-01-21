"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/skipWhile");
class skipWhilePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        //emit every 1s
        const source = Observable_1.Observable.interval(1000);
        //skip emitted values from source while value is less than 5
        const example = source.skipWhile(val => val < 5);
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.skipWhilePoc = skipWhilePoc;
//# sourceMappingURL=rxjsSkipWhile.js.map