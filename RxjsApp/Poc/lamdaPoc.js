"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LamdaPoc {
    constructor() {
        this.outter = 1;
    }
    test() {
        // this.executeCallback(function() { console.log(this.outter); });
        this.executeCallback(() => { console.log(this.outter); });
    }
    executeCallback(fun) {
        fun();
    }
}
exports.LamdaPoc = LamdaPoc;
//# sourceMappingURL=lamdaPoc.js.map