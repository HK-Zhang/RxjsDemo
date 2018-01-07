"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
var Rx = require('rxjs/Rx');
//import Rx = require('rxjs/Rx');
var FromPromisePoc = /** @class */ (function () {
    function FromPromisePoc() {
    }
    FromPromisePoc.prototype.test = function () {
        this.func1();
    };
    FromPromisePoc.prototype.func1 = function () {
        //example promise that will resolve or reject based on input
        var myPromise = function (willReject) {
            return new Promise(function (resolve, reject) {
                if (willReject) {
                    reject('Rejected!');
                }
                resolve('Resolved!');
            });
        };
        //emit true, then false
        var source = Rx.Observable.of(true, false);
        var example = source.mergeMap(function (val) {
            return Rx.Observable
                .fromPromise(myPromise(val))
                .catch(function (error) { return Rx.Observable.of("Error: " + error); });
        });
        //output: 'Error: Rejected!', 'Resolved!'
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return FromPromisePoc;
}());
exports.FromPromisePoc = FromPromisePoc;
//# sourceMappingURL=RxjsFromPromise.js.map