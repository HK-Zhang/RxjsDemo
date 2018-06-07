"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class IgnoreElementPoc {
    test() {
        this.func1();
        this.func2();
    }
    func1() {
        // emit value every 100ms
        const source = rxjs_1.interval(100);
        // ignore everything but complete
        const example = source.pipe(operators_1.take(5), operators_1.ignoreElements());
        // output: "COMPLETE!"
        const subscribe = example.subscribe((val) => console.log(`NEXT: ${val}`), (val) => console.log(`ERROR: ${val}`), () => console.log("COMPLETE!"));
    }
    func2() {
        // emit value every 100ms
        const source = rxjs_1.interval(100);
        // ignore everything but error
        const error = source.pipe(operators_1.flatMap((val) => {
            if (val === 4) {
                return rxjs_1.Observable.throw(`ERROR AT ${val}`);
            }
            return rxjs_1.of(val);
        }), operators_1.ignoreElements());
        // output: "ERROR: ERROR AT 4"
        const subscribe = error.subscribe((val) => console.log(`NEXT: ${val}`), (val) => console.log(`ERROR: ${val}`), () => console.log("SECOND COMPLETE!"));
    }
}
exports.IgnoreElementPoc = IgnoreElementPoc;
//# sourceMappingURL=ignoreElement.js.map