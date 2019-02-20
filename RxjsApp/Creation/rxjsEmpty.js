"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/empty");
const Observable_1 = require("rxjs/Observable");
class EmptyPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // create observable that immediately completes
        const example = Observable_1.Observable.empty();
        // output: 'Complete!'
        const subscribe = example.subscribe({
            complete: () => console.log("Complete!"),
            next: () => console.log("Next"),
        });
    }
}
exports.EmptyPoc = EmptyPoc;
//# sourceMappingURL=rxjsEmpty.js.map