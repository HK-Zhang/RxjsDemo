"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class PipePoc {
    test() {
        // this.func1();
        this.func2();
        // this.func3();
        // this.func4();
    }
    func1() {
        const filterOutEvens = operators_1.filter((x) => (x % 2) === 0);
        const sum = operators_1.reduce((acc, next) => acc + next, 0);
        const doubleBy = (x) => operators_1.map((value) => value * x);
        // const complicatedLogic = pipe(
        //     filterOutEvens,
        //     doubleBy(2),
        //     sum,
        // );
        const source$ = rxjs_1.range(0, 10);
        source$.pipe(filterOutEvens, doubleBy(2), sum)
            .subscribe((x) => console.log(x)); // 40
    }
    func2() {
        const filterOutEvens = operators_1.filter((x) => x % 2 === 0);
        const doubleBy = (x) => operators_1.map((value) => value * x);
        const sum = operators_1.reduce((acc, next) => acc + next, 0);
        const source$ = rxjs_1.range(0, 10);
        source$.pipe(filterOutEvens, doubleBy(2), sum)
            .subscribe(console.log); // 40
    }
    func3() {
        const source$ = rxjs_1.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        source$.pipe(operators_1.filter((x) => x % 2 === 1), operators_1.map((x) => x * 2), operators_1.scan((acc, next) => acc + next, 0), operators_1.startWith(0))
            .subscribe(console.log);
    }
}
exports.PipePoc = PipePoc;
//# sourceMappingURL=rxjsPipe.js.map