"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WindowCountPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit every 1s
        const source = rxjs_1.interval(1000);
        const example = source.pipe(
        // start new window every 4 emitted values
        operators_1.windowCount(4), operators_1.tap(() => console.log("NEW WINDOW!")));
        const subscribeTwo = example.pipe(
        // window emits nested observable
        operators_1.mergeAll())
            .subscribe((val) => console.log(val));
    }
}
exports.WindowCountPoc = WindowCountPoc;
//# sourceMappingURL=rxjsWindowCount.js.map