"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/expand");
require("rxjs/add/operator/take");
const rxjs_1 = require("rxjs");
class ExpandPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit 2
        const source = rxjs_1.Observable.of(2);
        const example = source
            .expand((val) => {
            // 2,3,4,5,6
            console.log(`Passed value: ${val}`);
            // 3,4,5,6
            return rxjs_1.Observable.of(1 + val);
        })
            .take(5);
        /*
            "RESULT: 2"
            "Passed value: 2"
            "RESULT: 3"
            "Passed value: 3"
            "RESULT: 4"
            "Passed value: 4"
            "RESULT: 5"
            "Passed value: 5"
            "RESULT: 6"
            "Passed value: 6"
        */
        // output: 2,3,4,5,6
        const subscribe = example.subscribe((val) => console.log(`RESULT: ${val}`));
    }
}
exports.ExpandPoc = ExpandPoc;
//# sourceMappingURL=rxjsExpand.js.map