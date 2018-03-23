"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class CollectionPoc {
    test() {
        this.countFunc();
    }
    countFunc() {
        const v1 = _.countBy([6.1, 4.2, 6.3], Math.floor);
        const v2 = _.countBy(["one", "two", "three"], "length");
        console.log(v1);
        console.log(v2);
        const v3 = _.every([true, 1, null, "yes"], Boolean);
        console.log(v3);
        const users = [
            { user: "barney", age: 36, active: false },
            { user: "fred", age: 40, active: false },
        ];
        const v4 = _.every(users, { user: "barney", active: false });
        console.log(v4);
        const v5 = _.every(users, ["active", false]);
        console.log(v5);
    }
}
exports.CollectionPoc = CollectionPoc;
//# sourceMappingURL=CollectionPoc.js.map