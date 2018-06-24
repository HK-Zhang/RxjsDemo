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
        const throwErrorOnPurpose = operators_1.map((val) => {
            if (val > 5) {
                // error will be picked up by retryWhen
                throw val;
            }
            return val;
        });
        // log error message
        const logError = operators_1.tap((val) => console.log(`Value ${val} was too high!`));
        const restartLater = operators_1.delayWhen((val) => rxjs_1.timer(val * 1000));
        const logAndRetry = operators_1.retryWhen((errors) => errors.pipe(logError, restartLater));
        const example = source.pipe(throwErrorOnPurpose, logAndRetry);
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
        const throwErrorOnPurpose = operators_1.map((val) => {
            if (val > 2) {
                throw val;
            }
            return val;
        });
        const processRetry = operators_1.mergeMap(([error, i]) => {
            if (i > 3) {
                return rxjs_1.Observable.throw(error);
            }
            console.log(`Wait ${i} seconds, then retry!`);
            return rxjs_1.timer(i * 1000);
        });
        const retryHard = operators_1.retryWhen((attempts) => attempts.pipe(operators_1.zip(rxjs_1.range(1, 4)), processRetry));
        const logError = operators_1.catchError((_) => rxjs_1.of("Ouch, giving up!"));
        const example = source.pipe(throwErrorOnPurpose, retryHard, logError);
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.RetryWhenPoc = RetryWhenPoc;
//# sourceMappingURL=rxjsRetryWhen.js.map