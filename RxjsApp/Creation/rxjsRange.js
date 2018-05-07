"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class RangePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit 1-10 in sequence
        const source = rxjs_1.range(1, 10);
        // output: 1,2,3,4,5,6,7,8,9,10
        const example = source.subscribe((val) => console.log(val));
    }
}
exports.RangePoc = RangePoc;
//# sourceMappingURL=rxjsRange.js.map