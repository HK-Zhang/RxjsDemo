"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/operator/windowWhen");
const rxjs_1 = require("rxjs");
class WindowWhenPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit immediately then every 1s
        const source = rxjs_1.Observable.timer(0, 1000);
        const example = source
            .windowWhen(() => rxjs_1.Observable.interval(5000))
            .do(() => console.log("NEW WINDOW!"));
        const subscribeTwo = example
            .mergeAll()
            .subscribe((val) => console.log(val));
    }
}
exports.WindowWhenPoc = WindowWhenPoc;
//# sourceMappingURL=rxjsWindowWhen.js.map