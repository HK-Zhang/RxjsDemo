"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Poc = /** @class */ (function () {
    function Poc() {
    }
    Poc.prototype.test = function () {
        this.func1();
    };
    Poc.prototype.func1 = function () {
        var a = _.padStart("Hello TypeScript!", 20, " ");
        console.log(a);
    };
    return Poc;
}());
exports.Poc = Poc;
//# sourceMappingURL=Poc.js.map