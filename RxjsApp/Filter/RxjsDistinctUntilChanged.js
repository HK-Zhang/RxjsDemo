"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var RxjsDistinctUntilChangedPoc = /** @class */ (function () {
    function RxjsDistinctUntilChangedPoc() {
    }
    RxjsDistinctUntilChangedPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    RxjsDistinctUntilChangedPoc.prototype.func1 = function () {
        //only output distinct values, based on the last emitted value
        var myArrayWithDuplicatesInARow = Rx.Observable.from([
            1,
            1,
            2,
            2,
            3,
            1,
            2,
            3
        ]);
        var distinctSub = myArrayWithDuplicatesInARow
            .distinctUntilChanged()
            .subscribe(function (val) { return console.log('DISTINCT SUB:', val); });
        var nonDistinctSub = myArrayWithDuplicatesInARow
            .subscribe(function (val) { return console.log('NON DISTINCT SUB:', val); });
    };
    RxjsDistinctUntilChangedPoc.prototype.func2 = function () {
        var sampleObject = { name: 'Test' };
        //Objects must be same reference
        var myArrayWithDuplicateObjects = Rx.Observable.from([
            sampleObject,
            sampleObject,
            sampleObject
        ]);
        //only out distinct objects, based on last emitted value
        var nonDistinctObjects = myArrayWithDuplicateObjects
            .distinctUntilChanged()
            .subscribe(function (val) { return console.log('DISTINCT OBJECTS:', val); });
    };
    return RxjsDistinctUntilChangedPoc;
}());
exports.RxjsDistinctUntilChangedPoc = RxjsDistinctUntilChangedPoc;
//# sourceMappingURL=RxjsDistinctUntilChanged.js.map