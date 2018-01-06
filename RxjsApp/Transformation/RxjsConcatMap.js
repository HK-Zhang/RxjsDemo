"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var ConcatMapPoc = /** @class */ (function () {
    function ConcatMapPoc() {
    }
    ConcatMapPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    ConcatMapPoc.prototype.func1 = function () {
        //emit 'Hello' and 'Goodbye'
        var source = Rx.Observable.of('Hello', 'Goodbye');
        // map value from source into inner observable, when complete emit result and move to next
        var example = source.concatMap(function (val) { return Rx.Observable.of(val + " World!"); });
        //output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        var subscribe = example.subscribe(function (val) { return console.log('Example One:', val); });
    };
    ConcatMapPoc.prototype.func2 = function () {
        var concatMapSub = Rx.Observable.of(2000, 1000)
            .concatMap(function (v) { return Rx.Observable.of(v).delay(v); })
            .subscribe(function (v) { return console.log('concatMap:', v); });
        var mergeMapSub = Rx.Observable.of(2000, 1000)
            .mergeMap(function (v) { return Rx.Observable.of(v).delay(v); })
            .subscribe(function (v) { return console.log('mergeMap:', v); });
    };
    return ConcatMapPoc;
}());
exports.ConcatMapPoc = ConcatMapPoc;
//# sourceMappingURL=RxjsConcatMap.js.map