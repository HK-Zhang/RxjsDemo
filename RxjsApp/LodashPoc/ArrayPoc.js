"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class ArrayPoc {
    test() {
        this.func1();
    }
    func1() {
        const original = ["a", "b", "c", "d"];
        const target = _.chunk(original, 2);
        _.forEach(target, (val) => console.log(val));
    }
}
exports.ArrayPoc = ArrayPoc;
//# sourceMappingURL=ArrayPoc.js.map