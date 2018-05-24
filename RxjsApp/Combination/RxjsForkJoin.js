"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/forkJoin");
const Observable_1 = require("rxjs/Observable");
class ForkJoinPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = Observable_1.Observable.timer(1000).mapTo({ id: 1 });
        const getPostTwo$ = Observable_1.Observable.timer(2000).mapTo({ id: 2 });
        Observable_1.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ForkJoinPoc = ForkJoinPoc;
//# sourceMappingURL=RxjsForkJoin.js.map