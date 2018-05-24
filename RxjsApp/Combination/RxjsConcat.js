"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/concat");
const Observable_1 = require("rxjs/Observable");
class ConcatPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = Observable_1.Observable.timer(3000).mapTo({ id: 1 });
        const getPostTwo$ = Observable_1.Observable.timer(1000).mapTo({ id: 2 });
        Observable_1.Observable.concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ConcatPoc = ConcatPoc;
//# sourceMappingURL=RxjsConcat.js.map