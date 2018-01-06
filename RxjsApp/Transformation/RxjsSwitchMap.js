"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var createInnerObservable = function (id) {
    return Rx.Observable.create(function (observer) {
        console.log('%ccreated inner observable:', 'color:blue;', id);
        var handler = setInterval(function () {
            observer.next('inner:' + id);
        }, 3000);
        return function () {
            clearInterval(handler);
            console.log('%ccanceled inner observable:', 'color:red;', id);
        };
    });
};
var SwithMapPoc = /** @class */ (function () {
    function SwithMapPoc() {
    }
    SwithMapPoc.prototype.test = function () {
        //this.func();
        //this.func2();
        this.func3();
    };
    SwithMapPoc.prototype.func = function () {
        Rx.Observable.timer(0, 10000)
            .do(function (id) {
            console.log('%carrived outer observable:', 'color:green;', id);
        })
            .switchMap(function (id) { return createInnerObservable(id); })
            .subscribe(function (innerValue) { return console.log('subscribed value:', innerValue); });
    };
    SwithMapPoc.prototype.func2 = function () {
        //emit immediately, then every 5s
        var source = Rx.Observable.timer(0, 5000);
        //switch to new inner observable when source emits, emit items that are emitted
        var example = source.switchMap(function () { return Rx.Observable.interval(500); });
        //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    SwithMapPoc.prototype.func3 = function () {
        //emit immediately, then every 5s
        var source = Rx.Observable.timer(0, 5000);
        //switch to new inner observable when source emits, invoke project function and emit values
        var example = source.switchMap(function () { return Rx.Observable.interval(2000); }, function (outerValue, innerValue, outerIndex, innerIndex) { return ({
            outerValue: outerValue,
            innerValue: innerValue,
            outerIndex: outerIndex,
            innerIndex: innerIndex
        }); });
        /*
            Output:
            {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
            {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
            {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
            {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return SwithMapPoc;
}());
exports.SwithMapPoc = SwithMapPoc;
//# sourceMappingURL=RxjsSwitchMap.js.map