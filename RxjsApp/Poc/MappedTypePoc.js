"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MappedTypePoc {
    test() {
        this.readonlyType();
    }
    readonlyType() {
        const rp = { name: "Henry", age: 21 };
        console.log(rp.name);
        // not allowed to change readonly property.
        // rp.name = "jim";
    }
}
exports.MappedTypePoc = MappedTypePoc;
//# sourceMappingURL=MappedTypePoc.js.map