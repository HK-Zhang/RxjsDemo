"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ConcatPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = rxjs_1.timer(3000).pipe(operators_1.mapTo({ id: 1 }));
        const getPostTwo$ = rxjs_1.timer(1000).pipe(operators_1.mapTo({ id: 2 }));
        rxjs_1.concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ConcatPoc = ConcatPoc;
//# sourceMappingURL=RxjsConcat.js.map