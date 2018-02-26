"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
class TakePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 1,2,3,4,5
        const source = Observable_1.Observable.of(1, 2, 3, 4, 5);
        // take the first emitted value then complete
        const example = source.take(1);
        // output: 1
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1s
        const interval = Observable_1.Observable.interval(1000);
        // take the first 5 emitted values
        const example = interval.take(5);
        // output: 0,1,2,3,4
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.TakePoc = TakePoc;
//# sourceMappingURL=RxjsTake.js.map