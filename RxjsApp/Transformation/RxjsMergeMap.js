"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
class MergeMapPoc {
    test() {
        this.func0();
        // this.func1();
        // this.func3();
    }
    /**
     * func0
     */
    func0() {
        // emit value every 1s
        const letters = Observable_1.Observable.of("a", "b", "c");
        const result = letters.mergeMap((x) => Observable_1.Observable.interval(5000).map((i) => x).take(5));
        result.subscribe((x) => console.log(x));
    }
    func1() {
        // emit value every 1s
        const letters = Observable_1.Observable.of("a", "b", "c");
        const result = letters.mergeMap((x) => Observable_1.Observable.interval(1000).map((i) => x + i).take(5), (oV, iV, oI, iI) => {
            // console.log("innerValue", iV);
            return "inner" + iV;
        }, 2);
        result.subscribe((x) => console.log(x));
    }
    func2() {
        // emit value every 1s
        const source = Observable_1.Observable.interval(1000);
        const example = source.mergeMap(
        // project
        (val) => Observable_1.Observable.interval(5000).take(2), 
        // resultSelector
        (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal], 
        // concurrent
        2);
        /*
                Output:
                [0, 0, 0, 0] <--1st inner observable
                [1, 1, 0, 0] <--2nd inner observable
                [0, 0, 1, 1] <--1st inner observable
                [1, 1, 1, 1] <--2nd inner observable
                [2, 2, 0, 0] <--3rd inner observable
                [3, 3, 0, 0] <--4th inner observable
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        const post$ = Observable_1.Observable.of({ id: 1 });
        const getPostInfo$ = Observable_1.Observable.timer(3000).mapTo({ title: "Post title" });
        const posts$ = post$.mergeMap((post) => getPostInfo$).subscribe((res) => console.log(res));
    }
}
exports.MergeMapPoc = MergeMapPoc;
//# sourceMappingURL=RxjsMergeMap.js.map