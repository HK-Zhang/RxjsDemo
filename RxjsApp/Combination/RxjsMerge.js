"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var MergePoc = /** @class */ (function () {
    function MergePoc() {
    }
    MergePoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    MergePoc.prototype.func1 = function () {
        //emit every 2.5 seconds
        var first = Rx.Observable.interval(2500);
        //emit every 2 seconds
        var second = Rx.Observable.interval(2000);
        //emit every 1.5 seconds
        var third = Rx.Observable.interval(1500);
        //emit every 1 second
        var fourth = Rx.Observable.interval(1000);
        //emit outputs from one observable
        var example = Rx.Observable.merge(first.mapTo('FIRST!'), second.mapTo('SECOND!'), third.mapTo('THIRD'), fourth.mapTo('FOURTH'));
        //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    MergePoc.prototype.func2 = function () {
        //emit every 2.5 seconds
        var first = Rx.Observable.interval(2500);
        //emit every 1 second
        var second = Rx.Observable.interval(1000);
        //used as instance method
        var example = first.merge(second);
        //output: 0,1,0,2....
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return MergePoc;
}());
exports.MergePoc = MergePoc;
//# sourceMappingURL=RxjsMerge.js.map