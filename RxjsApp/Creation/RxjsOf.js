"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('promise');
var Rx = require('rxjs/Rx');
var tfx = function (item, index) {
    return item * 2;
};
var OfPoc = /** @class */ (function () {
    function OfPoc() {
    }
    OfPoc.prototype.test = function () {
        //this.func1();
        this.func3();
    };
    OfPoc.prototype.func1 = function () {
        //emits any number of provided values in sequence
        var source = Rx.Observable.of(1, 2, 3, 4, 5);
        //output: 1,2,3,4,5
        var subscribe = source.subscribe(function (val) { return console.log(val); });
    };
    OfPoc.prototype.func2 = function () {
        var source = Rx.Observable.of(1, 2, 3);
        var target = source.map(tfx);
        target.subscribe(function (x) { return console.log(x); });
    };
    OfPoc.prototype.func3 = function () {
        //emits values of any type
        var source = Rx.Observable.of({ name: 'Brian' }, [1, 2, 3], function hello() {
            return 'Hello';
        });
        //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
        var subscribe = source.subscribe(function (val) { return console.log(val); });
    };
    return OfPoc;
}());
exports.OfPoc = OfPoc;
//# sourceMappingURL=RxjsOf.js.map