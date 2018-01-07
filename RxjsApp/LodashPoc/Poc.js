"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Poc {
    test() {
        this.func1();
    }
    func1() {
        let a = _.padStart("Hello TypeScript!", 20, " ");
        console.log(a);
    }
}
exports.Poc = Poc;
//# sourceMappingURL=Poc.js.map