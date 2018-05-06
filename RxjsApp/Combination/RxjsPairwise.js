"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/pairwise");
const rxjs_1 = require("rxjs");
class PairwisePoc {
    test() {
        this.func1();
    }
    func1() {
        rxjs_1.Observable.interval(1000)
            .pairwise()
            .subscribe((pair) => console.log(pair)); // pair[1] - pair[0]
    }
}
exports.PairwisePoc = PairwisePoc;
//# sourceMappingURL=RxjsPairwise.js.map