"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
const Observable_1 = require("rxjs/Observable");
const createInnerObservable = (id) => Observable_1.Observable.create((observer) => {
    console.log("%ccreated inner observable:", "color:blue;", id);
    const handler = setInterval(() => {
        observer.next("inner:" + id);
    }, 3000);
    return () => {
        clearInterval(handler);
        console.log("%ccanceled inner observable:", "color:red;", id);
    };
});
class SwithMapPoc {
    test() {
        this.func();
        // this.func2();
        // this.func3();
    }
    func() {
        Observable_1.Observable.timer(0, 8000)
            .do((id) => {
            console.log("%carrived outer observable:", "color:green;", id);
        })
            .switchMap((id) => createInnerObservable(id))
            .subscribe((innerValue) => console.log("subscribed value:", innerValue));
    }
    func2() {
        // emit immediately, then every 5s
        const source = Observable_1.Observable.timer(0, 5000);
        // switch to new inner observable when source emits, emit items that are emitted
        const example = source.switchMap(() => Observable_1.Observable.interval(500));
        // output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        // emit immediately, then every 5s
        const source = Observable_1.Observable.timer(0, 5000);
        // switch to new inner observable when source emits, invoke project function and emit values
        const example = source.switchMap(() => Observable_1.Observable.interval(2000), (outerValue, innerValue, outerIndex, innerIndex) => ({ outerValue, innerValue, outerIndex, innerIndex }));
        /*
            Output:
            {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
            {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
            {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
            {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func4() {
        const timer = Observable_1.Observable.interval(1000);
        const result = timer.switchMap((v) => Observable_1.Observable.of("a"));
        result.subscribe((x) => console.log(x));
    }
}
exports.SwithMapPoc = SwithMapPoc;
//# sourceMappingURL=RxjsSwitchMap.js.map