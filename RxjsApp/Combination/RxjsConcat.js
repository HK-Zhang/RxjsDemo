"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/concat");
const rxjs_1 = require("rxjs");
class ConcatPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = rxjs_1.Observable.timer(3000).mapTo({ id: 1 });
        const getPostTwo$ = rxjs_1.Observable.timer(1000).mapTo({ id: 2 });
        rxjs_1.Observable.concat(getPostOne$, getPostTwo$).subscribe((res) => console.log(res));
    }
}
exports.ConcatPoc = ConcatPoc;
//# sourceMappingURL=RxjsConcat.js.map