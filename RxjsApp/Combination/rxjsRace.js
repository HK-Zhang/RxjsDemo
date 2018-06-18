"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class RacePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // const win = Observable.interval(1000);
        // const fwin = win.mapTo('1s won!');
        // take the first observable to emit
        const example = rxjs_1.race(
        // emit every 1.5s
        rxjs_1.interval(1500), 
        // emit every 1s
        rxjs_1.interval(1000).pipe(operators_1.mapTo("1s won!")), 
        // emit every 2s
        rxjs_1.interval(2000), 
        // emit every 2.5s
        rxjs_1.interval(2500));
        // output: "1s won!"..."1s won!"...etc
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const raiserror = operators_1.map(() => {
            throw new Error("error");
        });
        // Throws an error and ignore the rest of the observables.
        const first = rxjs_1.of("first").pipe(operators_1.delay(100), raiserror);
        const second = rxjs_1.of("second").pipe(operators_1.delay(200));
        const third = rxjs_1.of("third").pipe(operators_1.delay(300));
        const race$ = rxjs_1.race(first, second, third).subscribe((val) => console.log(val));
    }
}
exports.RacePoc = RacePoc;
//# sourceMappingURL=rxjsRace.js.map