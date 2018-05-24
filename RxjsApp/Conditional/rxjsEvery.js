"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/every");
const Observable_1 = require("rxjs/Observable");
class EveryPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 5 values
        const source = Observable_1.Observable.of(1, 2, 3, 4, 5);
        const example = source
            .every((val) => val % 2 === 0);
        // output: false
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit 5 values
        const allEvens = Observable_1.Observable.of(2, 4, 6, 8, 10);
        const example = allEvens
            .every((val) => val % 2 === 0);
        // output: true
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.EveryPoc = EveryPoc;
//# sourceMappingURL=rxjsEvery.js.map