"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var DebounceTimePoc = /** @class */ (function () {
    function DebounceTimePoc() {
    }
    DebounceTimePoc.prototype.test = function () {
        this.func1();
    };
    DebounceTimePoc.prototype.func1 = function () {
        var times = [
            { value: 0, time: 100 },
            { value: 1, time: 600 },
            { value: 2, time: 400 },
            { value: 3, time: 700 },
            { value: 4, time: 200 }
        ];
        // Delay each item by time and project value;
        var source = Rx.Observable.from(times)
            .flatMap(function (item) {
            return Rx.Observable
                .of(item.value)
                .delay(item.time);
        })
            .debounceTime(500 /* ms */);
        var subscription = source.subscribe(function (x) {
            console.log('Next: %s', x);
        }, function (err) {
            console.log('Error: %s', err);
        }, function () {
            console.log('Completed');
        });
        // => Next: 3
        // => Completed
    };
    return DebounceTimePoc;
}());
exports.DebounceTimePoc = DebounceTimePoc;
//# sourceMappingURL=RxjsDebounceTime.js.map