"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
class CombineLatestPoc {
    test() {
        this.func1();
    }
    func1() {
        const intervalOne$ = Rx.Observable.interval(1000);
        const intervalTwo$ = Rx.Observable.interval(2000);
        Rx.Observable.combineLatest(intervalOne$, intervalTwo$).subscribe(all => console.log(all));
    }
}
exports.CombineLatestPoc = CombineLatestPoc;
//# sourceMappingURL=RxjsCombineLatest.js.map