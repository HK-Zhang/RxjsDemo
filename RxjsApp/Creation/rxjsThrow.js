"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/throw");
const Observable_1 = require("rxjs/Observable");
class ThrowPoc {
    test() {
        this.func1();
    }
    func1() {
        // emits an error with specified value on subscription
        const source = Observable_1.Observable.throw("This is an error!");
        // output: 'Error: This is an error!'
        const subscribe = source.subscribe({
            complete: () => console.log("Complete!"),
            error: (val) => console.log(`Error: ${val}`),
            next: (val) => console.log(val),
        });
    }
}
exports.ThrowPoc = ThrowPoc;
//# sourceMappingURL=rxjsThrow.js.map