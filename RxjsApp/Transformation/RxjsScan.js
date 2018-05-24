"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ScanPoc {
    test() {
        this.func1();
        // this.func2();
        // this.func3();
    }
    func1() {
        const subject = new rxjs_1.Subject();
        // basic scan example, sum over time starting with zero
        const example = subject.pipe(operators_1.startWith(0), operators_1.scan((acc, curr) => acc + curr));
        // log accumulated values
        const subscribe = example.subscribe((val) => console.log("Accumulated total:", val));
        // next values into subject, adding to the current sum
        subject.next(1); // 1
        subject.next(2); // 3
        subject.next(3); // 6
    }
    func2() {
        // Accumulate values in an array, emit random values from this array.
        const scanObs = rxjs_1.interval(1000).pipe(operators_1.scan((a, c) => a.concat(c), []), operators_1.map((r) => r[Math.floor(Math.random() * r.length)]), operators_1.distinctUntilChanged())
            .subscribe(console.log);
    }
    func3() {
        const subject = new rxjs_1.Subject();
        // scan example building an object over time
        const example = subject.pipe(operators_1.scan((acc, curr) => Object.assign({}, acc, curr), {}));
        // log accumulated values
        const subscribe = example.subscribe((val) => console.log("Accumulated object:", val));
        // next values into subject, adding properties to object
        subject.next({ name: "Joe" }); // {name: 'Joe'}
        subject.next({ age: 30 }); // {name: 'Joe', age: 30}
        subject.next({ favoriteLanguage: "JavaScript" }); // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    }
}
exports.ScanPoc = ScanPoc;
//# sourceMappingURL=RxjsScan.js.map