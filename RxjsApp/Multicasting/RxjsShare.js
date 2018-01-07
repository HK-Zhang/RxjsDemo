"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
var SharePoc = /** @class */ (function () {
    function SharePoc() {
    }
    SharePoc.prototype.test = function () {
        //this.func1();
        this.func2();
    };
    SharePoc.prototype.func2 = function () {
        //emit value in 1s
        var source = Rx.Observable.timer(1000);
        //log side effect, emit result
        var example = source
            .do(function () { return console.log('***SIDE EFFECT***'); })
            .mapTo('***RESULT***');
        /*
          ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***SIDE EFFECT***"
          "***RESULT***"
        */
        var subscribe = example.subscribe(function (val) { return console.log(val); });
        var subscribeTwo = example.subscribe(function (val) { return console.log(val); });
        //share observable among subscribers
        var sharedExample = example.share();
        /*
          ***SHARED, SIDE EFFECT EXECUTED ONCE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***RESULT***"
        */
        var subscribeThree = sharedExample.subscribe(function (val) { return console.log(val); });
        var subscribeFour = sharedExample.subscribe(function (val) { return console.log(val); });
    };
    return SharePoc;
}());
exports.SharePoc = SharePoc;
//# sourceMappingURL=RxjsShare.js.map