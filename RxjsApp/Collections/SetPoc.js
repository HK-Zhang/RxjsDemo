"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = require("typescript-collections");
var SetPoc = /** @class */ (function () {
    function SetPoc() {
    }
    SetPoc.prototype.test = function () {
        this.func1();
    };
    SetPoc.prototype.func1 = function () {
        var mySet = new Collections.Set();
        mySet.add(123);
        mySet.add(123); // Duplicates not allowed in a set
        // The following will give error due to wrong type:
        // mySet.add("asdf"); // Can only add numbers since that is the type argument.
        mySet.forEach(function (t) { console.log(t); });
    };
    return SetPoc;
}());
exports.SetPoc = SetPoc;
//# sourceMappingURL=SetPoc.js.map