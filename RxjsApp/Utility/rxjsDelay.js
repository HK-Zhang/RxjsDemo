"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DelayPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit one item
        const example = rxjs_1.of(null);
        // delay output of each by an extra second
        const message = rxjs_1.merge(example.pipe(operators_1.mapTo("Hello")), example.pipe(operators_1.mapTo("World!"), operators_1.delay(1000)), example.pipe(operators_1.mapTo("Goodbye"), operators_1.delay(2000)), example.pipe(operators_1.mapTo("World!"), operators_1.delay(3000)));
        // output: 'Hello'...'World!'...'Goodbye'...'World!'
        const subscribe = message.subscribe((val) => console.log(val));
    }
}
exports.DelayPoc = DelayPoc;
//# sourceMappingURL=rxjsDelay.js.map