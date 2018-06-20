"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ForkJoinPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = rxjs_1.timer(1000).pipe(operators_1.mapTo({ id: 1 }));
        const getPostTwo$ = rxjs_1.timer(2000).pipe(operators_1.mapTo({ id: 2 }));
        // Runs all observable sequences in parallel and collect their last elements.
        rxjs_1.forkJoin(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ForkJoinPoc = ForkJoinPoc;
//# sourceMappingURL=RxjsForkJoin.js.map