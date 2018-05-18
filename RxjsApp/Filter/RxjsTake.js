"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class TakePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 1,2,3,4,5
        const source = rxjs_1.of(1, 2, 3, 4, 5);
        // take the first emitted value then complete
        const example = source.pipe(operators_1.take(1));
        // output: 1
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1s
        const interval$ = rxjs_1.interval(1000);
        // take the first 5 emitted values
        const example = interval$.pipe(operators_1.take(5));
        // output: 0,1,2,3,4
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.TakePoc = TakePoc;
//# sourceMappingURL=RxjsTake.js.map