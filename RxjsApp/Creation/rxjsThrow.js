"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class ThrowPoc {
    test() {
        this.func1();
    }
    func1() {
        // emits an error with specified value on subscription
        const source = rxjs_1.throwError("This is an error!");
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