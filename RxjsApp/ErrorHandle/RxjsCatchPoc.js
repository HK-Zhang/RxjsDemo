"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
var Rx = require('rxjs/Rx');
var tfx = function (item, index) {
    return item * 2;
};
var CatchPoc = /** @class */ (function () {
    function CatchPoc() {
    }
    CatchPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    CatchPoc.prototype.func1 = function () {
        //emit error
        var source = Rx.Observable.throw('This is an error!');
        //gracefully handle error, returning observable with error message
        var example = source.catch(function (val) { return Rx.Observable.of("I caught: " + val); });
        //output: 'I caught: This is an error'
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    CatchPoc.prototype.func2 = function () {
        //create promise that immediately rejects
        var myBadPromise = function () {
            return new Promise(function (resolve, reject) { return reject('Rejected!'); });
        };
        //emit single value after 1 second
        var source = Rx.Observable.timer(1000);
        //catch rejected promise, returning observable containing error message
        var example = source.flatMap(function () {
            return Rx.Observable.fromPromise(myBadPromise()).catch(function (error) {
                return Rx.Observable.of("Bad Promise: " + error);
            });
        });
        //output: 'Bad Promise: Rejected'
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return CatchPoc;
}());
exports.CatchPoc = CatchPoc;
//# sourceMappingURL=RxjsCatchPoc.js.map