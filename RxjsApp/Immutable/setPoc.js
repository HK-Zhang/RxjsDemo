"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class setImPoc {
    test() {
        this.func1();
    }
    func1() {
        const s1 = immutable_1.Set(['a', 'b', 'c']);
        const s2 = s1.intersect(immutable_1.Set(['c', 'a', 't']));
        s1.forEach(t => console.log(t.valueOf()));
        s2.forEach(t => console.log(t.valueOf()));
        const s3 = s1.union(immutable_1.Set(['c', 'a', 't']));
        s3.forEach(t => console.log(t.valueOf()));
    }
}
exports.setImPoc = setImPoc;
//# sourceMappingURL=setPoc.js.map