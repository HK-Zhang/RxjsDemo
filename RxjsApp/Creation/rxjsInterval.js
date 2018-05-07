"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class IntervalPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit value in sequence every 1 second
        const source = rxjs_1.interval(1000);
        // output: 0,1,2,3,4,5....
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
exports.IntervalPoc = IntervalPoc;
//# sourceMappingURL=rxjsInterval.js.map