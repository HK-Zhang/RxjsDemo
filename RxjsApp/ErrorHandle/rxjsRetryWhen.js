"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var RetryWhenPoc = /** @class */ (function () {
    function RetryWhenPoc() {
    }
    RetryWhenPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    RetryWhenPoc.prototype.func1 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        var example = source
            .map(function (val) {
            if (val > 5) {
                //error will be picked up by retryWhen
                throw val;
            }
            return val;
        })
            .retryWhen(function (errors) {
            return errors
                .do(function (val) { return console.log("Value " + val + " was too high!"); })
                .delayWhen(function (val) { return Rx.Observable.timer(val * 1000); });
        });
        /*
          output:
          0
          1
          2
          3
          4
          5
          "Value 6 was too high!"
          --Wait 5 seconds then repeat
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    RetryWhenPoc.prototype.func2 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        var example = source
            .map(function (val) {
            if (val > 2) {
                //error will be picked up by retryWhen
                throw val;
            }
            return val;
        })
            .retryWhen(function (attempts) {
            return attempts.zip(Rx.Observable.range(1, 4)).mergeMap(function (_a) {
                var error = _a[0], i = _a[1];
                if (i > 3) {
                    return Rx.Observable.throw(error);
                }
                console.log("Wait " + i + " seconds, then retry!");
                return Rx.Observable.timer(i * 1000);
            });
        })
            .catch(function (_) { return Rx.Observable.of('Ouch, giving up!'); });
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return RetryWhenPoc;
}());
exports.RetryWhenPoc = RetryWhenPoc;
//# sourceMappingURL=rxjsRetryWhen.js.map