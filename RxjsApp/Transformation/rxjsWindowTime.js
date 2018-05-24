"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WindowTimePoc {
    test() {
        this.func1();
    }
    func1() {
        // emit immediately then every 1s
        const source = rxjs_1.timer(0, 1000);
        const example = source.pipe(
        // start new window every 3s
        operators_1.windowTime(3000), operators_1.tap(() => console.log("NEW WINDOW!")));
        const subscribeTwo = example.pipe(
        // window emits nested observable
        operators_1.mergeAll())
            .subscribe((val) => console.log(val));
    }
}
exports.WindowTimePoc = WindowTimePoc;
//# sourceMappingURL=rxjsWindowTime.js.map