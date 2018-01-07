"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class ForkJoinPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = Rx.Observable.timer(1000).mapTo({ id: 1 });
        const getPostTwo$ = Rx.Observable.timer(2000).mapTo({ id: 2 });
        Rx.Observable.forkJoin(getPostOne$, getPostTwo$).subscribe(res => console.log(res));
    }
}
exports.ForkJoinPoc = ForkJoinPoc;
//# sourceMappingURL=RxjsForkJoin.js.map