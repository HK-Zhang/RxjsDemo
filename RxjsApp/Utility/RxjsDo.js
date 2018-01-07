"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var source = Rx.Observable.range(0, 3)
    .do(function (x) { console.log('Do Next:', x); }, function (err) { console.log('Do Error:', err); }, function () { console.log('Do Completed'); });
/* Using an observer */
//var observer = Rx.Observer.create(
//    function (x) { console.log('Do Next: %s', x); },
//    function (err) { console.log('Do Error: %s', err); },
//    function () { console.log('Do Completed'); }
//);
//var source = Rx.Observable.range(0, 3)
//    .do(observer);
var doPoc = /** @class */ (function () {
    function doPoc() {
    }
    doPoc.prototype.test = function () {
        this.func1();
    };
    doPoc.prototype.func1 = function () {
        var source = Rx.Observable.of(1, 2, 3, 4, 5);
        //transparently log values from source with 'do'
        var example = source
            .do(function (val) { return console.log("BEFORE MAP: " + val); })
            .map(function (val) { return val + 10; })
            .do(function (val) { return console.log("AFTER MAP: " + val); });
        //'do' does not transform values
        //output: 11...12...13...14...15
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    doPoc.prototype.func2 = function () {
        var subscription = source.subscribe(function (x) {
            console.log('Next: %s', x);
        }, function (err) {
            console.log('Error: %s', err);
        }, function () {
            console.log('Completed');
        });
    };
    return doPoc;
}());
exports.doPoc = doPoc;
//# sourceMappingURL=RxjsDo.js.map