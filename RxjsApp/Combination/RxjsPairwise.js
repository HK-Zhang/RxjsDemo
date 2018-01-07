"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class PairwisePoc {
    test() {
        this.func1();
    }
    func1() {
        Rx.Observable.interval(1000)
            .pairwise()
            .subscribe(pair => console.log(pair)); // pair[1] - pair[0]
    }
}
exports.PairwisePoc = PairwisePoc;
//# sourceMappingURL=RxjsPairwise.js.map