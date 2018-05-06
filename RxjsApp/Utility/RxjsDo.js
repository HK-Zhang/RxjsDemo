"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/range");
require("rxjs/add/operator/do");
const rxjs_1 = require("rxjs");
class DoPoc {
    test() {
        this.func1();
    }
    func1() {
        const source = rxjs_1.Observable.of(1, 2, 3, 4, 5);
        // transparently log values from source with 'do'
        const example = source
            .do((val) => console.log(`BEFORE MAP: ${val}`))
            .map((val) => val + 10)
            .do((val) => console.log(`AFTER MAP: ${val}`));
        // 'do' does not transform values
        // output: 11...12...13...14...15
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.Observable.range(0, 3)
            .do((x) => console.log("Do Next:", x), (err) => console.log("Do Error:", err), () => console.log("Do Completed"));
        const subscription = source.subscribe((x) => console.log("Next: %s", x), (err) => console.log("Error: %s", err), () => console.log("Completed"));
    }
}
exports.DoPoc = DoPoc;
//# sourceMappingURL=RxjsDo.js.map