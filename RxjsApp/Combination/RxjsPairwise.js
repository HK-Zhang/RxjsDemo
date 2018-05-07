"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class PairwisePoc {
    test() {
        this.func1();
    }
    func1() {
        rxjs_1.interval(1000).pipe(operators_1.pairwise())
            .subscribe((pair) => console.log(pair)); // pair[1] - pair[0]
    }
}
exports.PairwisePoc = PairwisePoc;
//# sourceMappingURL=RxjsPairwise.js.map