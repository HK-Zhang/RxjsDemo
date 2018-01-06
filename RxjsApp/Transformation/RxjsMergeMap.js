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
    MergeMapPoc.prototype.func2 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        var example = source.mergeMap(
        //project
        function (val) { return Rx.Observable.interval(5000).take(2); }, 
        //resultSelector
        function (oVal, iVal, oIndex, iIndex) { return [oIndex, oVal, iIndex, iVal]; }, 
        //concurrent
        2);
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return MergeMapPoc;
}());
exports.MergeMapPoc = MergeMapPoc;
//# sourceMappingURL=RxjsMergeMap.js.map