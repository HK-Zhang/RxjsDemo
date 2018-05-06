"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class EmptyPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // create observable that immediately completes
        const example = rxjs_1.empty();
        // output: 'Complete!'
        const subscribe = example.subscribe({
            complete: () => console.log("Complete!"),
            next: () => console.log("Next"),
        });
    }
}
exports.EmptyPoc = EmptyPoc;
//# sourceMappingURL=rxjsEmpty.js.map