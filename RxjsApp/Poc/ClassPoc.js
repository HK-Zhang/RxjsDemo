"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassA_1 = require("./ClassA");
class ClassPoc {
    test() {
        const t = new ClassA_1.ClassA();
        t.pa = "a";
        // t.newFunc = () => "Non Hope";
        t.newFunc = () => "Non Hope";
        console.log(t.newFunc());
    }
}
exports.ClassPoc = ClassPoc;
//# sourceMappingURL=ClassPoc.js.map