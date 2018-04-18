"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class FunctionPoc {
    test() {
        this.afterPoc();
    }
    afterPoc() {
        const fp = _.after(3, () => console.log("OMG!"));
        fp(); // Nothing
        fp(); // Nothing
        fp(); // Prints "OMG!"
        const v1 = _.map(["6", "8", "10"], _.ary(parseInt, 1));
        console.log(v1);
        const ff = _.before(4, () => console.log(new Date().getTime().toString()));
        ff();
        ff();
        ff();
        ff();
    }
}
exports.FunctionPoc = FunctionPoc;
//# sourceMappingURL=FunctionPoc.js.map