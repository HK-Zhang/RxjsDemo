"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DelayWhenPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every second
        const message = rxjs_1.interval(1000);
        // emit value after five seconds
        const delayForFiveSeconds = () => rxjs_1.timer(5000);
        // after 5 seconds, start emitting delayed interval values
        const delayWhenExample = message.pipe(operators_1.delayWhen(delayForFiveSeconds));
        // log values, delayed for 5 seconds
        // ex. output: 5s....1...2...3
        const subscribe = delayWhenExample.subscribe((val) => console.log(val));
    }
}
exports.DelayWhenPoc = DelayWhenPoc;
//# sourceMappingURL=rxjsDelayWhen.js.map