"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var PairwisePoc = /** @class */ (function () {
    function PairwisePoc() {
    }
    PairwisePoc.prototype.test = function () {
        this.func1();
    };
    PairwisePoc.prototype.func1 = function () {
        Rx.Observable.interval(1000)
            .pairwise()
            .subscribe(function (pair) { return console.log(pair); }); // pair[1] - pair[0]
    };
    return PairwisePoc;
}());
exports.PairwisePoc = PairwisePoc;
//# sourceMappingURL=RxjsPairwise.js.map