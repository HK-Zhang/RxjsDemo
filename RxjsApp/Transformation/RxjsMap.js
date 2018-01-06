"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var MapPoc = /** @class */ (function () {
    function MapPoc() {
    }
    MapPoc.prototype.test = function () {
        this.func1();
    };
    MapPoc.prototype.func1 = function () {
        //emit (1,2,3,4,5)
        var source = Rx.Observable.from([1, 2, 3, 4, 5]);
        //add 10 to each value
        var example = source.map(function (val) { return val + 10; });
        //output: 11,12,13,14,15
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    MapPoc.prototype.func2 = function () {
        //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
        var source = Rx.Observable.from([
            { name: 'Joe', age: 30 },
            { name: 'Frank', age: 20 },
            { name: 'Ryan', age: 50 }
        ]);
        //grab each persons name
        var example = source.map(function (person) { return person.name; });
        //output: "Joe","Frank","Ryan"
        var subscribe = example.subscribe(function (val) { return console.log(val); });
    };
    return MapPoc;
}());
exports.MapPoc = MapPoc;
//# sourceMappingURL=RxjsMap.js.map