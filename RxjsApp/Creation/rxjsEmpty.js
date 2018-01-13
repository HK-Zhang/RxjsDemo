"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/empty");
class EmptyPoc {
    test() {
        this.func1();
        //this.func2();
    }
    func1() {
        //Create observable that immediately completes
        const example = Observable_1.Observable.empty();
        //output: 'Complete!'
        const subscribe = example.subscribe({
            next: () => console.log('Next'),
            complete: () => console.log('Complete!')
        });
    }
}
exports.EmptyPoc = EmptyPoc;
//# sourceMappingURL=rxjsEmpty.js.map