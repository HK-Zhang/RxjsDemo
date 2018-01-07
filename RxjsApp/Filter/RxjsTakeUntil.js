"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var TakeUntilPoc = /** @class */ (function () {
    function TakeUntilPoc() {
    }
    TakeUntilPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    TakeUntilPoc.prototype.func1 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        //after 5 seconds, emit value
        var timer = Rx.Observable.timer(5000);
        //when timer emits after 5s, complete source
        var example = source.takeUntil(timer);
        //output: 0,1,2,3
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    TakeUntilPoc.prototype.func2 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        //is number even?
        var isEven = function (val) { return val % 2 === 0; };
        //only allow values that are even
        var evenSource = source.filter(isEven);
        //keep a running total of the number of even numbers out
        var evenNumberCount = evenSource.scan(function (acc, _) { return acc + 1; }, 0);
        //do not emit until 5 even numbers have been emitted
        var fiveEvenNumbers = evenNumberCount.filter(function (val) { return val > 5; });
        var example = evenSource
            .withLatestFrom(evenNumberCount)
            .map(function (_a) {
            var val = _a[0], count = _a[1];
            return "Even number (" + count + ") : " + val;
        })
            .takeUntil(fiveEvenNumbers);
        /*
            Even number (1) : 0,
            Even number (2) : 2
            Even number (3) : 4
            Even number (4) : 6
            Even number (5) : 8
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return TakeUntilPoc;
}());
exports.TakeUntilPoc = TakeUntilPoc;
//# sourceMappingURL=RxjsTakeUntil.js.map