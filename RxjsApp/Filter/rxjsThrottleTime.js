"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/throttleTime");
class throttleTimePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        //emit value every 1 second
        const source = Observable_1.Observable.interval(1000);
        /*
          throttle for five seconds
          last value emitted before throttle ends will be emitted from source
        */
        const example = source.throttleTime(5000);
        //output: 0...6...12
        const subscribe = example.subscribe(val => console.log(val));
    }
    func2() {
        const source = Observable_1.Observable.merge(
        //emit every .75 seconds
        Observable_1.Observable.interval(750), 
        //emit every 1 second
        Observable_1.Observable.interval(1000));
        //throttle in middle of emitted values
        const example = source.throttleTime(1200);
        //output: 0...1...4...4...8...7
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.throttleTimePoc = throttleTimePoc;
//# sourceMappingURL=rxjsThrottleTime.js.map