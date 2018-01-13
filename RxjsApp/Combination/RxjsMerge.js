"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var Rx = require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/merge");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/mapTo");
class MergePoc {
    test() {
        //this.func1();
        this.func2();
    }
    func1() {
        //emit every 2.5 seconds
        const first = Observable_1.Observable.interval(2500);
        //emit every 2 seconds
        const second = Observable_1.Observable.interval(2000);
        //emit every 1.5 seconds
        const third = Observable_1.Observable.interval(1500);
        //emit every 1 second
        const fourth = Observable_1.Observable.interval(1000);
        //emit outputs from one observable
        const example = Observable_1.Observable.merge(first.mapTo('FIRST!'), second.mapTo('SECOND!'), third.mapTo('THIRD'), fourth.mapTo('FOURTH'));
        //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
        const subscribe = example.subscribe(val => console.log(val));
    }
    func2() {
        //emit every 2.5 seconds
        const first = Observable_1.Observable.interval(2500);
        //emit every 1 second
        const second = Observable_1.Observable.interval(1000);
        //used as instance method
        const example = first.merge(second);
        //output: 0,1,0,2....
        const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.MergePoc = MergePoc;
//# sourceMappingURL=RxjsMerge.js.map