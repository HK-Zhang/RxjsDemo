"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var RetryPoc = /** @class */ (function () {
    function RetryPoc() {
    }
    RetryPoc.prototype.test = function () {
        this.func1();
    };
    RetryPoc.prototype.func1 = function () {
        //emit value every 1s
        var source = Rx.Observable.interval(1000);
        var example = source
            .flatMap(function (val) {
            //throw error for demonstration
            if (val > 5) {
                return Rx.Observable.throw('Error!');
            }
            return Rx.Observable.of(val);
        })
            .retry(2);
        /*
          output:
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          0..1..2..3..4..5..
          "Error!: Retried 2 times then quit!"
        */
        var subscribe = example.subscribe({
            next: function (val) { return console.log(val); },
            error: function (val) { return console.log(val + ": Retried 2 times then quit!"); }
        });
    };
    return RetryPoc;
}());
exports.RetryPoc = RetryPoc;
//# sourceMappingURL=rxjsRetry.js.map