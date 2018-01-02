"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
//import * as Rx from 'rxjs/Rx';
var tfx = function (item, index) {
    return item * 2;
};
var source = Rx.Observable.of(1, 2, 3);
var target = source.map(tfx);
var ofPoc = /** @class */ (function () {
    function ofPoc() {
    }
    ofPoc.prototype.test = function () {
        target.subscribe(function (x) { return console.log(x); });
    };
    return ofPoc;
}());
exports.ofPoc = ofPoc;
//# sourceMappingURL=RxjsOf.js.map