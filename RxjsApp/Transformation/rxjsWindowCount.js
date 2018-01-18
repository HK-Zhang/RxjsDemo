"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/windowCount");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/observable/interval");
class windowCountPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit every 1s
        const source = Observable_1.Observable.interval(1000);
        const example = source
            .windowCount(4)
            .do(() => console.log('NEW WINDOW!'));
        const subscribeTwo = example
            .mergeAll()
            .subscribe(val => console.log(val));
    }
}
exports.windowCountPoc = windowCountPoc;
//# sourceMappingURL=rxjsWindowCount.js.map