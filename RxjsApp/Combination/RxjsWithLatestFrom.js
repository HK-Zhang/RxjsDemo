"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var WithLatestFromPoc = /** @class */ (function () {
    function WithLatestFromPoc() {
    }
    WithLatestFromPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    WithLatestFromPoc.prototype.func1 = function () {
        //emit every 5s
        var source = Rx.Observable.interval(5000);
        //emit every 1s
        var secondSource = Rx.Observable.interval(1000);
        var example = source.withLatestFrom(secondSource).map(function (_a) {
            var first = _a[0], second = _a[1];
            return "First Source (5s): " + first + " Second Source (1s): " + second;
        });
        /*
          "First Source (5s): 0 Second Source (1s): 4"
          "First Source (5s): 1 Second Source (1s): 9"
          "First Source (5s): 2 Second Source (1s): 14"
          ...
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    WithLatestFromPoc.prototype.func2 = function () {
        //emit every 5s
        var source = Rx.Observable.interval(5000);
        //emit every 1s
        var secondSource = Rx.Observable.interval(1000);
        //withLatestFrom slower than source
        var example = secondSource
            .withLatestFrom(source)
            .map(function (_a) {
            var first = _a[0], second = _a[1];
            return "Source (1s): " + first + " Latest From (5s): " + second;
        });
        /*
          "Source (1s): 4 Latest From (5s): 0"
          "Source (1s): 5 Latest From (5s): 0"
          "Source (1s): 6 Latest From (5s): 0"
          ...
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return WithLatestFromPoc;
}());
exports.WithLatestFromPoc = WithLatestFromPoc;
//# sourceMappingURL=RxjsWithLatestFrom.js.map