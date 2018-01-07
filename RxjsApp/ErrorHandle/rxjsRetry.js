"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class RetryPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit value every 1s
        const source = Rx.Observable.interval(1000);
        const example = source
            .flatMap(val => {
            //throw error for demonstration
            if (val > 5) {
                return Rx.Observable.throw('Error!');
            }
            return Rx.Observable.of(val);
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