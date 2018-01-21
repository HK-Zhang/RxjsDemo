"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/skip");
class skipPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        //emit every 1s
        const source = Observable_1.Observable.interval(1000);
        //skip the first 5 emitted values
        const example = source.skip(5);
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
    }
    func2() {
        const numArrayObs = Observable_1.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        // 3,4,5...
        const skipObs = numArrayObs
            .skip(2)
            .subscribe(console.log);
        // 3,4,5...
        const filterObs = numArrayObs
            .filter((val, index) => index > 1)
            .subscribe(console.log);
        //Same output!
    }
}
exports.skipPoc = skipPoc;
//# sourceMappingURL=rxjsSkip.js.map