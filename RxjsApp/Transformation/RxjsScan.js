"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/distinctUntilChanged");
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
class ScanPoc {
    test() {
        this.func1();
        // this.func2();
        // this.func3();
    }
    func1() {
        const subject = new Subject_1.Subject();
        // basic scan example, sum over time starting with zero
        const example = subject.startWith(0).scan((acc, curr) => acc + curr);
        // log accumulated values
        const subscribe = example.subscribe((val) => console.log("Accumulated total:", val));
        // next values into subject, adding to the current sum
        subject.next(1); // 1
        subject.next(2); // 3
        subject.next(3); // 6
    }
    func2() {
        // Accumulate values in an array, emit random values from this array.
        const scanObs = Observable_1.Observable.interval(1000)
            .scan((a, c) => a.concat(c), [])
            .map((r) => r[Math.floor(Math.random() * r.length)])
            .distinctUntilChanged()
            .subscribe(console.log);
    }
    func3() {
        const subject = new Subject_1.Subject();
        // scan example building an object over time
        const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
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