"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
class RetryPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit value every 1s
        const source = Observable_1.Observable.interval(1000);
        const example = source
            .flatMap(val => {
            //throw error for demonstration
            if (val > 5) {
                return Observable_1.Observable.throw('Error!');
            }
            return Observable_1.Observable.of(val);
        })
            .retry(2);
        /*
          output:
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          "Error!: Retried 2 times then quit!"
        */
        const subscribe = example.subscribe({
            next: val => console.log(val),
            error: val => console.log(`${val}: Retried 2 times then quit!`)
        });
    }
}
exports.RetryPoc = RetryPoc;
//# sourceMappingURL=rxjsRetry.js.map