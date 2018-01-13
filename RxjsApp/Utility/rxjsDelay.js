"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/mapTo");
require("rxjs/add/observable/merge");
class delayPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit one item
        const example = Observable_1.Observable.of(null);
        //delay output of each by an extra second
        const message = Observable_1.Observable.merge(example.mapTo('Hello'), example.mapTo('World!').delay(1000), example.mapTo('Goodbye').delay(2000), example.mapTo('World!').delay(3000));
        //output: 'Hello'...'World!'...'Goodbye'...'World!'
        const subscribe = message.subscribe(val => console.log(val));
    }
}
exports.delayPoc = delayPoc;
//# sourceMappingURL=rxjsDelay.js.map