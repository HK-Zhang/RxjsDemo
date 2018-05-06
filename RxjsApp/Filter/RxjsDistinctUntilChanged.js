"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class RxjsDistinctUntilChangedPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // only output distinct values, based on the last emitted value
        const myArrayWithDuplicatesInARow = rxjs_1.Observable.from([
            1,
            1,
            2,
            2,
            3,
            1,
            2,
            3,
        ]);
        const distinctSub = myArrayWithDuplicatesInARow
            .distinctUntilChanged()
            .subscribe((val) => console.log("DISTINCT SUB:", val));
        const nonDistinctSub = myArrayWithDuplicatesInARow
            .subscribe((val) => console.log("NON DISTINCT SUB:", val));
    }
    func2() {
        const sampleObject = { name: "Test" };
        // Objects must be same reference
        const myArrayWithDuplicateObjects = rxjs_1.Observable.from([
            sampleObject,
            sampleObject,
            sampleObject,
        ]);
        // only out distinct objects, based on last emitted value
        const nonDistinctObjects = myArrayWithDuplicateObjects
            .distinctUntilChanged()
            .subscribe((val) => console.log("DISTINCT OBJECTS:", val));
    }
}
exports.RxjsDistinctUntilChangedPoc = RxjsDistinctUntilChangedPoc;
//# sourceMappingURL=RxjsDistinctUntilChanged.js.map