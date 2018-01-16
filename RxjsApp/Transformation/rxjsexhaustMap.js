"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/take");
require("rxjs/add/operator/delay");
require("rxjs/add/observable/of");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/exhaustMap");
class exhaustMapPoc {
    test() {
        //this.func1();
        this.func2();
    }
    func1() {
        const interval = Observable_1.Observable.interval(1000);
        const delayedInterval = interval.delay(10).take(4);
        const exhaustSub = Observable_1.Observable.merge(
        // delay 10ms, then start interval emitting 4 values
        delayedInterval, 
        // emit immediately
        Observable_1.Observable.of(true))
            .exhaustMap(_ => interval.take(5))
            .subscribe(val => console.log(val));
    }
    func2() {
        const firstInterval = Observable_1.Observable.interval(1000).take(10);
        const secondInterval = Observable_1.Observable.interval(1000).take(2);
        const exhaustSub = firstInterval
            .do(i => console.log(`Emission of first interval: ${i}`))
            .exhaustMap(f => secondInterval)
            .subscribe(s => console.log(s));
    }
}
exports.exhaustMapPoc = exhaustMapPoc;
//# sourceMappingURL=rxjsexhaustMap.js.map