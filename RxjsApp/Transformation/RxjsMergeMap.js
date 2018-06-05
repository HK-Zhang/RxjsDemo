"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MergeMapPoc {
    test() {
        // this.func0();
        this.func01();
        // this.func1();
        // this.func3();
    }
    /**
     * func0
     */
    func0() {
        // emit value every 1s
        const letters = rxjs_1.of("a", "b", "c");
        const result = letters.pipe(operators_1.mergeMap((x) => rxjs_1.interval(5000).pipe(operators_1.map((i) => x), operators_1.take(5))));
        result.subscribe((x) => console.log(x));
    }
    func01() {
        const letters = rxjs_1.of("a", "b", "c");
        const result = letters.pipe(operators_1.switchMap((x) => rxjs_1.interval(5000).pipe(operators_1.map((i) => x), operators_1.take(5))));
        result.subscribe((x) => console.log(x));
    }
    func1() {
        // emit value every 1s
        const letters = rxjs_1.of("a", "b", "c");
        const result = letters.pipe(operators_1.mergeMap((x) => rxjs_1.interval(1000).pipe(operators_1.map((i) => x + i), operators_1.take(5)), (oV, iV, oI, iI) => {
            // console.log("innerValue", iV);
            return "inner" + iV;
        }, 2));
        result.subscribe((x) => console.log(x));
    }
    func2() {
        // emit value every 1s
        const source = rxjs_1.interval(1000);
        const example = source.pipe(operators_1.mergeMap(
        // project
        (val) => rxjs_1.interval(5000).pipe(operators_1.take(2)), 
        // resultSelector
        (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal], 
        // concurrent
        2));
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
        const post$ = rxjs_1.of({ id: 1 });
        const getPostInfo$ = rxjs_1.timer(3000).pipe(operators_1.mapTo({ title: "Post title" }));
        const posts$ = post$.pipe(operators_1.mergeMap((post) => getPostInfo$)).subscribe((res) => console.log(res));
    }
}
exports.MergeMapPoc = MergeMapPoc;
//# sourceMappingURL=RxjsMergeMap.js.map