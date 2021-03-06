"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/exhaustMap");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/take");
const Observable_1 = require("rxjs/Observable");
class ExhaustMapPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        const interval = Observable_1.Observable.interval(1000);
        const interval2 = Observable_1.Observable.interval(500);
        const delayedInterval = interval.delay(10).take(4);
        const exhaustSub = Observable_1.Observable.merge(
        // delay 10ms, then start interval emitting 4 values
        delayedInterval, 
        // emit immediately
        Observable_1.Observable.of(true))
            .exhaustMap((_) => interval2.take(10))
            .subscribe((val) => console.log(val));
    }
    func2() {
        const firstInterval = Observable_1.Observable.interval(1000).take(10);
        const secondInterval = Observable_1.Observable.interval(1000).take(2);
        const exhaustSub = firstInterval
            .do((i) => console.log(`Emission of first interval: ${i}`))
            .exhaustMap((f) => secondInterval)
            .subscribe((s) => console.log(s));
    }
}
exports.ExhaustMapPoc = ExhaustMapPoc;
//# sourceMappingURL=rxjsexhaustMap.js.map