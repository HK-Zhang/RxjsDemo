"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/operator/windowCount");
const rxjs_1 = require("rxjs");
class WindowCountPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit every 1s
        const source = rxjs_1.Observable.interval(1000);
        const example = source
            .windowCount(4)
            .do(() => console.log("NEW WINDOW!"));
        const subscribeTwo = example
            .mergeAll()
            .subscribe((val) => console.log(val));
    }
}
exports.WindowCountPoc = WindowCountPoc;
//# sourceMappingURL=rxjsWindowCount.js.map