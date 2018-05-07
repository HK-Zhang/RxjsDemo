"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class CombineLatestPoc {
    test() {
        this.func1();
    }
    func1() {
        const intervalOne$ = rxjs_1.interval(1000);
        const intervalTwo$ = rxjs_1.interval(2000);
        rxjs_1.combineLatest(intervalOne$, intervalTwo$).subscribe((all) => console.log(all));
    }
}
exports.CombineLatestPoc = CombineLatestPoc;
//# sourceMappingURL=RxjsCombineLatest.js.map