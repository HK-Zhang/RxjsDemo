"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
var Rx = require('rxjs/Rx');
//import Rx = require('rxjs/Rx');
var FromPoc = /** @class */ (function () {
    function FromPoc() {
    }
    FromPoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    FromPoc.prototype.func1 = function () {
        //emit array as a sequence of values
        var arraySource = Rx.Observable.from([1, 2, 3, 4, 5]);
        //output: 1,2,3,4,5
        var subscribe = arraySource.subscribe(function (val) { return console.log(val); });
    };
    FromPoc.prototype.func2 = function () {
        //emit result of promise
        var promiseSource = Rx.Observable.from(new Promise(function (resolve) { return resolve('Hello World!'); }));
        //output: 'Hello World'
        var subscribe = promiseSource.subscribe(function (val) { return console.log(val); });
    };
    FromPoc.prototype.func3 = function () {
        ////works on js collections
        //const map = new l
        //map.set(1, 'Hi');
        //map.set(2, 'Bye');
        //const mapSource = Rx.Observable.from(map);
        ////output: [1, 'Hi'], [2, 'Bye']
        //const subscribe = mapSource.subscribe(val => console.log(val));
    };
    return FromPoc;
}());
exports.FromPoc = FromPoc;
//# sourceMappingURL=RxjsFrom.js.map