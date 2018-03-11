"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/operator/windowToggle");
const Observable_1 = require("rxjs/Observable");
class WindowTogglePoc {
    test() {
        this.func1();
    }
    func1() {
        // emit immediately then every 1s
        const source = Observable_1.Observable.timer(0, 1000);
        // toggle window on every 5
        const toggle = Observable_1.Observable.interval(5000);
        const example = source
            .windowToggle(toggle, (val) => {
            console.log("N" + val);
            return Observable_1.Observable.interval(5 * 1000);
        })
            .do(() => console.log("NEW WINDOW!"));
        const subscribeTwo = example
            .mergeAll()
            .subscribe((val) => console.log(val));
    }
}
exports.WindowTogglePoc = WindowTogglePoc;
//# sourceMappingURL=rxjsWindowToggle.js.map