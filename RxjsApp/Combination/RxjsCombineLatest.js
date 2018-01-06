"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var CombineLatestPoc = /** @class */ (function () {
    function CombineLatestPoc() {
    }
    CombineLatestPoc.prototype.test = function () {
        this.func1();
    };
    CombineLatestPoc.prototype.func1 = function () {
        var intervalOne$ = Rx.Observable.interval(1000);
        var intervalTwo$ = Rx.Observable.interval(2000);
        Rx.Observable.combineLatest(intervalOne$, intervalTwo$).subscribe(function (all) { return console.log(all); });
    };
    return CombineLatestPoc;
}());
exports.CombineLatestPoc = CombineLatestPoc;
//# sourceMappingURL=RxjsCombineLatest.js.map