"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WindowTogglePoc {
    test() {
        this.func1();
    }
    func1() {
        // emit immediately then every 1s
        const source = rxjs_1.timer(0, 1000);
        // toggle window on every 5
        const toggle = rxjs_1.interval(5000);
        const example = source.pipe(
        // turn window on every 5s
        operators_1.windowToggle(toggle, (val) => {
            console.log("N" + val);
            return rxjs_1.interval(val * 1000);
            // return Observable.interval(5 * 1000);
        }), operators_1.tap(() => console.log("NEW WINDOW!")));
        const subscribeTwo = example.pipe(
        // window emits nested observable
        operators_1.mergeAll())
            .subscribe((val) => console.log(val));
    }
}
exports.WindowTogglePoc = WindowTogglePoc;
//# sourceMappingURL=rxjsWindowToggle.js.map