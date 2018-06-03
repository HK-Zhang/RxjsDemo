"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ExhaustMapPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        const interval$ = rxjs_1.interval(1000);
        const interval2 = rxjs_1.interval(500);
        const delayedInterval = interval$.pipe(operators_1.delay(10), operators_1.take(4));
        const exhaustSub = rxjs_1.merge(
        // delay 10ms, then start interval emitting 4 values
        delayedInterval, 
        // emit immediately
        rxjs_1.of(true)).pipe(
        // .do((val) => console.log(val))
        /*
         *  The first emitted value (of(true)) will be mapped
         *  to an interval observable emitting 1 value every
         *  second, completing after 5.
         *  Because the emissions from the delayed interval
         *  fall while this observable is still active they will be ignored.
         *
         *  Contrast this with concatMap which would queue,
         *  switchMap which would switch to a new inner observable each emission,
         *  and mergeMap which would maintain a new subscription for each emitted value.
         */
        operators_1.exhaustMap((_) => interval2.pipe(operators_1.take(10))))
            .subscribe((val) => console.log(val));
    }
    func2() {
        const firstInterval = rxjs_1.interval(1000).pipe(operators_1.take(10));
        const secondInterval = rxjs_1.interval(1000).pipe(operators_1.take(2));
        const exhaustSub = firstInterval.pipe(operators_1.tap((i) => console.log(`Emission of first interval: ${i}`)), operators_1.exhaustMap((f) => secondInterval))
            .subscribe((s) => console.log(s));
    }
}
exports.ExhaustMapPoc = ExhaustMapPoc;
//# sourceMappingURL=rxjsexhaustMap.js.map