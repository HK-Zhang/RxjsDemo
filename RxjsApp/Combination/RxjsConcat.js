"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var ConcatPoc = /** @class */ (function () {
    function ConcatPoc() {
    }
    ConcatPoc.prototype.test = function () {
        this.func1();
    };
    ConcatPoc.prototype.func1 = function () {
        var getPostOne$ = Rx.Observable.timer(3000).mapTo({ id: 1 });
        var getPostTwo$ = Rx.Observable.timer(1000).mapTo({ id: 2 });
        Rx.Observable.concat(getPostOne$, getPostTwo$).subscribe(function (res) { return console.log(res); });
    };
    return ConcatPoc;
}());
exports.ConcatPoc = ConcatPoc;
//# sourceMappingURL=RxjsConcat.js.map