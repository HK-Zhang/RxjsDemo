"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var ForkJoinPoc = /** @class */ (function () {
    function ForkJoinPoc() {
    }
    ForkJoinPoc.prototype.test = function () {
        this.func1();
    };
    ForkJoinPoc.prototype.func1 = function () {
        var getPostOne$ = Rx.Observable.timer(1000).mapTo({ id: 1 });
        var getPostTwo$ = Rx.Observable.timer(2000).mapTo({ id: 2 });
        Rx.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe(function (res) { return console.log(res); });
    };
    return ForkJoinPoc;
}());
exports.ForkJoinPoc = ForkJoinPoc;
//# sourceMappingURL=RxjsForkJoin.js.map