"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var MergeMapPoc = /** @class */ (function () {
    function MergeMapPoc() {
    }
    MergeMapPoc.prototype.test = function () {
        this.func1();
    };
    MergeMapPoc.prototype.func1 = function () {
        //emit value every 1s
        var letters = Rx.Observable.of('a', 'b', 'c');
        var result = letters.mergeMap(function (x) {
            return Rx.Observable.interval(1000).map(function (i) { return x + i; }).take(5);
        }, function (oV, iV, oI, iI) {
            // console.log("innerValue", iV);
            return "inner" + iV;
        }, 2);
        result.subscribe(function (x) { return console.log(x); });
    };
    return MergeMapPoc;
}());
exports.MergeMapPoc = MergeMapPoc;
//# sourceMappingURL=RxjsMergeMap.js.map