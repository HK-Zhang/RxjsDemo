"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/combineLatest");
const Observable_1 = require("rxjs/Observable");
class CombineLatestPoc {
    test() {
        this.func1();
    }
    func1() {
        const intervalOne$ = Observable_1.Observable.interval(1000);
        const intervalTwo$ = Observable_1.Observable.interval(2000);
        Observable_1.Observable.combineLatest(intervalOne$, intervalTwo$).subscribe((all) => console.log(all));
    }
}
exports.CombineLatestPoc = CombineLatestPoc;
//# sourceMappingURL=RxjsCombineLatest.js.map