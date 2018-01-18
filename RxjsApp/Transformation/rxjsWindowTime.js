"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/windowTime");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/observable/timer");
class windowTimePoc {
    test() {
        this.func1();
    }
    func1() {
        //emit immediately then every 1s
        const source = Observable_1.Observable.timer(0, 1000);
        const example = source
            .windowTime(3000)
            .do(() => console.log('NEW WINDOW!'));
        const subscribeTwo = example
            .mergeAll()
            .subscribe(val => console.log(val));
    }
}
exports.windowTimePoc = windowTimePoc;
//# sourceMappingURL=rxjsWindowTime.js.map