"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var StartWithPoc = /** @class */ (function () {
    function StartWithPoc() {
    }
    StartWithPoc.prototype.test = function () {
        //this.func1();
        //this.func2();
        this.func3();
    };
    StartWithPoc.prototype.func1 = function () {
        //emit (1,2,3)
        var source = Rx.Observable.of(1, 2, 3);
        //start with 0
        var example = source.startWith(0);
        //output: 0,1,2,3
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    StartWithPoc.prototype.func2 = function () {
        //emit ('World!', 'Goodbye', 'World!')
        var source = Rx.Observable.of('World!', 'Goodbye', 'World!');
        //start with 'Hello', concat current string to previous
        var example = source.startWith('Hello').scan(function (acc, curr) { return acc + " " + curr; });
        /*
          output:
          "Hello"
          "Hello World!"
          "Hello World! Goodbye"
          "Hello World! Goodbye World!"
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    StartWithPoc.prototype.func3 = function () {
        //emit values in sequence every 1s
        var source = Rx.Observable.interval(1000);
        //start with -3, -2, -1
        var example = source.startWith(-3, -2, -1);
        //output: -3, -2, -1, 0, 1, 2....
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return StartWithPoc;
}());
exports.StartWithPoc = StartWithPoc;
//# sourceMappingURL=RxjsStartWith.js.map