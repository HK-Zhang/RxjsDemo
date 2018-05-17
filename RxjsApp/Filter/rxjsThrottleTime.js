"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ThrottleTimePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit value every 1 second
        const source = rxjs_1.interval(1000);
        /*
          throttle for five seconds
          last value emitted before throttle ends will be emitted from source
        */
        const example = source.pipe(operators_1.throttleTime(5000));
        // output: 0...6...12
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.merge(
        // emit every .75 seconds
        rxjs_1.interval(750), 
        // emit every 1 second
        rxjs_1.interval(1000));
        // throttle in middle of emitted values
        const example = source.pipe(operators_1.throttleTime(1200));
        // output: 0...1...4...4...8...7
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.ThrottleTimePoc = ThrottleTimePoc;
//# sourceMappingURL=rxjsThrottleTime.js.map