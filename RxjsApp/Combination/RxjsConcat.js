"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class ConcatPoc {
    test() {
        this.func1();
    }
    func1() {
        const getPostOne$ = Rx.Observable.timer(3000).mapTo({ id: 1 });
        const getPostTwo$ = Rx.Observable.timer(1000).mapTo({ id: 2 });
        Rx.Observable.concat(getPostOne$, getPostTwo$).subscribe(res => console.log(res));
    }
}
exports.ConcatPoc = ConcatPoc;
//# sourceMappingURL=RxjsConcat.js.map