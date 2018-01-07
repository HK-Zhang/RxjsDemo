"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var TakePoc = /** @class */ (function () {
    function TakePoc() {
    }
    TakePoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    TakePoc.prototype.func1 = function () {
        //emit 1,2,3,4,5
        var source = Rx.Observable.of(1, 2, 3, 4, 5);
        //take the first emitted value then complete
        var example = source.take(1);
        //output: 1
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    TakePoc.prototype.func2 = function () {
        //emit value every 1s
        var interval = Rx.Observable.interval(1000);
        //take the first 5 emitted values
        var example = interval.take(5);
        //output: 0,1,2,3,4
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return TakePoc;
}());
exports.TakePoc = TakePoc;
//# sourceMappingURL=RxjsTake.js.map