"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WithLatestFromPoc {
    test() {
        this.func1();
        // this.func2();
        // this.func0();
    }
    func0() {
        // emit value every 3s
        const source = rxjs_1.of("a", "b", "c");
        const secondSource = rxjs_1.interval(3000);
        const getSecondSource = operators_1.map(([f, s]) => s);
        const combindSource = secondSource.pipe(operators_1.withLatestFrom(source), getSecondSource);
        const result = combindSource.subscribe((x) => console.log(x));
    }
    func1() {
        // emit every 5s
        const source = rxjs_1.interval(5000);
        // emit every 1s
        const secondSource = rxjs_1.interval(1000);
        const concateSources = operators_1.map(([first, second]) => {
            return `First Source (5s): ${first} Second Source (1s): ${second}`;
        });
        const example = source.pipe(operators_1.withLatestFrom(secondSource), concateSources);
        /*
          "First Source (5s): 0 Second Source (1s): 4"
          "First Source (5s): 1 Second Source (1s): 9"
          "First Source (5s): 2 Second Source (1s): 14"
          ...
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit every 5s
        const source = rxjs_1.interval(5000);
        // emit every 1s
        const secondSource = rxjs_1.interval(1000);
        // withLatestFrom slower than source
        const concateSources = operators_1.map(([first, second]) => {
            return `Source (1s): ${first} Latest From (5s): ${second}`;
        });
        // both sources must emit at least 1 value (5s) before emitting
        const example = secondSource.pipe(operators_1.withLatestFrom(source), concateSources);
        /*
          "Source (1s): 4 Latest From (5s): 0"
          "Source (1s): 5 Latest From (5s): 0"
          "Source (1s): 6 Latest From (5s): 0"
          ...
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.WithLatestFromPoc = WithLatestFromPoc;
//# sourceMappingURL=RxjsWithLatestFrom.js.map