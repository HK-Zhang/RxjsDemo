"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DoPoc {
    test() {
        this.func1();
    }
    func1() {
        const source = rxjs_1.of(1, 2, 3, 4, 5);
        // transparently log values from source with 'do'
        const example = source.pipe(operators_1.tap((val) => console.log(`BEFORE MAP: ${val}`)), operators_1.map((val) => val + 10), operators_1.tap((val) => console.log(`AFTER MAP: ${val}`)));
        // 'do' does not transform values
        // output: 11...12...13...14...15
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.range(0, 3).pipe(operators_1.tap((x) => console.log("Do Next:", x), (err) => console.log("Do Error:", err), () => console.log("Do Completed")));
        const subscription = source.subscribe((x) => console.log("Next: %s", x), (err) => console.log("Error: %s", err), () => console.log("Completed"));
    }
}
exports.DoPoc = DoPoc;
//# sourceMappingURL=RxjsDo.js.map