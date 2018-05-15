"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class RetryWhenPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit value every 1s
        const source = rxjs_1.interval(1000);
        const example = source.pipe(operators_1.map((val) => {
            if (val > 5) {
                // error will be picked up by retryWhen
                throw val;
            }
            return val;
        }), operators_1.retryWhen((errors) => errors.pipe(
        // log error message
        operators_1.tap((val) => console.log(`Value ${val} was too high!`))
        // restart in 5 seconds
        , operators_1.delayWhen((val) => rxjs_1.timer(val * 1000)))));
        /*
          output:
          0
          1
          2
          3
          4
          5
          "Value 6 was too high!"
          --Wait 5 seconds then repeat
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1s
        const source = rxjs_1.interval(1000);
        const example = source.pipe(operators_1.map((val) => {
            if (val > 2) {
                // error will be picked up by retryWhen
                throw val;
            }
            return val;
        }), operators_1.retryWhen((attempts) => {
            return attempts.pipe(operators_1.zip(rxjs_1.range(1, 4)), operators_1.mergeMap(([error, i]) => {
                if (i > 3) {
                    return rxjs_1.Observable.throw(error);
                }
                console.log(`Wait ${i} seconds, then retry!`);
                return rxjs_1.timer(i * 1000);
            }));
        }), operators_1.catchError((_) => rxjs_1.of("Ouch, giving up!")));
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.RetryWhenPoc = RetryWhenPoc;
//# sourceMappingURL=rxjsRetryWhen.js.map