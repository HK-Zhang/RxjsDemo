"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class mapImPoc {
    test() {
        this.func1();
    }
    func1() {
        const mapOne = immutable_1.Map().set(immutable_1.List([1]), 'listofone');
        console.log(mapOne.get(immutable_1.List([1])));
    }
}
exports.mapImPoc = mapImPoc;
//# sourceMappingURL=mapPoc.js.map