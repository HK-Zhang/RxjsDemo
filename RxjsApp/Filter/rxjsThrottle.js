"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
var Promise = require("promise");
class ThrottlePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit value every 1 second
        const source = rxjs_1.interval(1000);
        // throttle for 2 seconds, emit latest value
        const example = source.pipe(operators_1.throttle((val) => rxjs_1.interval(2000)));
        // output: 0...3...6...9
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1 second
        const source = rxjs_1.interval(1000);
        // incrementally increase the time to resolve based on source
        const promise = (val) => new Promise((resolve) => setTimeout(() => resolve(`Resolved: ${val}`), val * 100));
        // when promise resolves emit item from source
        const example = source.pipe(operators_1.throttle(promise), operators_1.map((val) => `Throttled off Promise: ${val}`));
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.ThrottlePoc = ThrottlePoc;
//# sourceMappingURL=rxjsThrottle.js.map