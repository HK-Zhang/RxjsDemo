"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var FilterPoc = /** @class */ (function () {
    function FilterPoc() {
    }
    FilterPoc.prototype.test = function () {
        //this.func1();
        //this.func2();
        this.func3();
    };
    FilterPoc.prototype.func1 = function () {
        //emit (1,2,3,4,5)
        var source = Rx.Observable.from([1, 2, 3, 4, 5]);
        //filter out non-even numbers
        var example = source.filter(function (num) { return num % 2 === 0; });
        //output: "Even number: 2", "Even number: 4"
        var subscribe = example.subscribe(function (val) { return console.log("Even number: " + val); });
    };
    FilterPoc.prototype.func2 = function () {
        //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
        var source = Rx.Observable.from([
            { name: 'Joe', age: 31 },
            { name: 'Bob', age: 25 }
        ]);
        //filter out people with age under 30
        var example = source.filter(function (person) { return person.age >= 30; });
        //output: "Over 30: Joe"
        var subscribe = example.subscribe(function (val) { return console.log("Over 30: " + val.name); });
    };
    FilterPoc.prototype.func3 = function () {
        //emit every second
        var source = Rx.Observable.interval(1000);
        //filter out all values until interval is greater than 5
        var example = source.filter(function (num) { return num > 5; });
        /*
          "Number greater than 5: 6"
          "Number greater than 5: 7"
          "Number greater than 5: 8"
          "Number greater than 5: 9"
        */
        var subscribe = example.subscribe(function (val) {
            return console.log("Number greater than 5: " + val);
        });
    };
    return FilterPoc;
}());
exports.FilterPoc = FilterPoc;
//# sourceMappingURL=RxjsFilter.js.map