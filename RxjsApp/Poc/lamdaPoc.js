"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LamdaPoc {
    constructor() {
        this.outter = 1;
    }
    test() {
        // Exception, due to outter is undefined in anonymous function.
        this.executeCallback(function () { console.log(this.outter); });
        // output: 1.
        // An arrow function does not have its own this; the this value of the enclosing execution context is used.
        this.executeCallback(() => { console.log(this.outter); });
    }
    executeCallback(fun) {
        fun();
    }
}
exports.LamdaPoc = LamdaPoc;
//# sourceMappingURL=lamdaPoc.js.map