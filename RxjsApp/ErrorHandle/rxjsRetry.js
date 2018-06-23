"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class RetryPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every 1s
        const source = rxjs_1.interval(1000);
        const porcess = operators_1.switchMap((val) => {
            // throw error for demonstration
            if (val > 5) {
                return rxjs_1.throwError("Error!");
            }
            return rxjs_1.of(val);
        });
        const example = source.pipe(porcess, operators_1.retry(2));
        /*
          output:
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          "Error!: Retried 2 times then quit!"
        */
        const subscribe = example.subscribe({
            error: (val) => console.log(`${val}: Retried 2 times then quit!`),
            next: (val) => console.log(val),
        });
    }
}
exports.RetryPoc = RetryPoc;
//# sourceMappingURL=rxjsRetry.js.map