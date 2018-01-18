"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/windowToggle");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
class windowTogglePoc {
    test() {
        this.func1();
    }
    func1() {
        //emit immediately then every 1s
        const source = Observable_1.Observable.timer(0, 1000);
        //toggle window on every 5
        const toggle = Observable_1.Observable.interval(5000);
        const example = source
            .windowToggle(toggle, val => Observable_1.Observable.interval(val * 1000))
            .do(() => console.log('NEW WINDOW!'));
        const subscribeTwo = example
            .mergeAll()
            .subscribe(val => console.log(val));
    }
}
exports.windowTogglePoc = windowTogglePoc;
//# sourceMappingURL=rxjsWindowToggle.js.map