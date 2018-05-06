"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/ignoreElements");
const rxjs_1 = require("rxjs");
class IgnoreElementPoc {
    test() {
        this.func1();
        this.func2();
    }
    func1() {
        // emit value every 100ms
        const source = rxjs_1.Observable.interval(100);
        // ignore everything but complete
        const example = source.take(5).ignoreElements();
        // output: "COMPLETE!"
        const subscribe = example.subscribe((val) => console.log(`NEXT: ${val}`), (val) => console.log(`ERROR: ${val}`), () => console.log("COMPLETE!"));
    }
    func2() {
        // emit value every 100ms
        const source = rxjs_1.Observable.interval(100);
        // ignore everything but error
        const error = source
            .flatMap((val) => {
            if (val === 4) {
                return rxjs_1.Observable.throw(`ERROR AT ${val}`);
            }
            return rxjs_1.Observable.of(val);
        })
            .ignoreElements();
        // output: "ERROR: ERROR AT 4"
        const subscribe = error.subscribe((val) => console.log(`NEXT: ${val}`), (val) => console.log(`ERROR: ${val}`), () => console.log("SECOND COMPLETE!"));
    }
}
exports.IgnoreElementPoc = IgnoreElementPoc;
//# sourceMappingURL=ignoreElement.js.map