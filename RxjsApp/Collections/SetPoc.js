"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collections = require("typescript-collections");
class SetPoc {
    test() {
        this.func1();
    }
    func1() {
        var mySet = new Collections.Set();
        mySet.add(123);
        mySet.add(123); // Duplicates not allowed in a set
        // The following will give error due to wrong type:
        // mySet.add("asdf"); // Can only add numbers since that is the type argument.
        mySet.forEach(t => { console.log(t); });
    }
}
exports.SetPoc = SetPoc;
//# sourceMappingURL=SetPoc.js.map