"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
// const { OrderedSet } = require("immutable");
require("immutable");
class orderedsetImPoc {
    test() {
        this.func1();
    }
    func1() {
        const s1 = immutable_1.OrderedSet([3, 1, 2]).map(x => 10 * x);
        s1.forEach(t => console.log(t.valueOf()));
        // const a = OrderedSet([1, 2, 3]);
        // const b = OrderedSet([4, 5, 6]);
        // const c = a.zip(b);
        // c.forEach(t => console.log(t.valueOf()));
        // const d = OrderedSet([1, 2]);
        // const e = OrderedSet([3, 4, 5]);
        // const f = d.zipAll(b);
        // f.forEach(t => console.log(t.valueOf()));
    }
}
exports.orderedsetImPoc = orderedsetImPoc;
//# sourceMappingURL=orderSet.js.map