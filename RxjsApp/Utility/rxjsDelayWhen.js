"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/delayWhen");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/timer");
class delayWhenPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit value every second
        const message = Observable_1.Observable.interval(1000);
        //emit value after five seconds
        const delayForFiveSeconds = () => Observable_1.Observable.timer(5000);
        //after 5 seconds, start emitting delayed interval values
        const delayWhenExample = message.delayWhen(delayForFiveSeconds);
        //log values, delayed for 5 seconds
        //ex. output: 5s....1...2...3
        const subscribe = delayWhenExample.subscribe(val => console.log(val));
    }
}
exports.delayWhenPoc = delayWhenPoc;
//# sourceMappingURL=rxjsDelayWhen.js.map