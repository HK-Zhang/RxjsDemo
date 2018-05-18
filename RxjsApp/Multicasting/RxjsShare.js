"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class SharePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func2() {
        // emit value in 1s
        const source = rxjs_1.timer(1000);
        // log side effect, emit result
        const example = source.pipe(operators_1.tap(() => console.log("***SIDE EFFECT***")), operators_1.mapTo("***RESULT***"));
        /*
          ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***SIDE EFFECT***"
          "***RESULT***"
        */
        const subscribe = example.subscribe((val) => console.log(val));
        const subscribeTwo = example.subscribe((val) => console.log(val));
        // share observable among subscribers
        const sharedExample = example.pipe(operators_1.share());
        /*
          ***SHARED, SIDE EFFECT EXECUTED ONCE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***RESULT***"
        */
        const subscribeThree = sharedExample.subscribe((val) => console.log(val));
        const subscribeFour = sharedExample.subscribe((val) => console.log(val));
    }
}
exports.SharePoc = SharePoc;
//# sourceMappingURL=RxjsShare.js.map