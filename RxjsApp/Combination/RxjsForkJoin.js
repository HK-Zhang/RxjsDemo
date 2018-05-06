"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/forkJoin");
const rxjs_1 = require("rxjs");
class ForkJoinPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = rxjs_1.Observable.timer(1000).mapTo({ id: 1 });
        const getPostTwo$ = rxjs_1.Observable.timer(2000).mapTo({ id: 2 });
        rxjs_1.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ForkJoinPoc = ForkJoinPoc;
//# sourceMappingURL=RxjsForkJoin.js.map