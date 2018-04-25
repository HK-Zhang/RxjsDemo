"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/startWith");
const Observable_1 = require("rxjs/Observable");
const from_1 = require("rxjs/observable/from");
const operators_1 = require("rxjs/operators");
const pipe_1 = require("rxjs/util/pipe");
class PipePoc {
    test() {
        this.func1();
        // this.func2();
        // this.func3();
        // this.func4();
    }
    func1() {
        const filterOutEvens = operators_1.filter((x) => (x % 2) === 0);
        const sum = operators_1.reduce((acc, next) => acc + next, 0);
        const doubleBy = (x) => operators_1.map((value) => value * x);
        const complicatedLogic = pipe_1.pipe(filterOutEvens, doubleBy(2), sum);
        const source$ = Observable_1.Observable.range(0, 10);
        source$.let(complicatedLogic).subscribe((x) => console.log(x)); // 50
    }
    func2() {
        const filterOutEvens = operators_1.filter((x) => x % 2 === 0);
        const doubleBy = (x) => operators_1.map((value) => value * x);
        const sum = operators_1.reduce((acc, next) => acc + next, 0);
        const source$ = Observable_1.Observable.range(0, 10);
        source$.pipe(filterOutEvens, doubleBy(2), sum)
            .subscribe(console.log); // 50
    }
    func3() {
        const source$ = from_1.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        source$
            .filter((x) => x % 2 === 1)
            .map((x) => x * 2)
            .scan((acc, next) => acc + next, 0)
            .startWith(0)
            .subscribe(console.log);
    }
    func4() {
        const filterOutEvens = operators_1.filter((x) => x % 2 === 1);
        const sum = operators_1.reduce((acc, next) => acc + next, 0);
        const doubleBy = (x) => operators_1.map((value) => value * x);
        const source$ = Observable_1.Observable.range(0, 10);
        source$
            .let(filterOutEvens)
            .let(doubleBy(2))
            .let(sum)
            .subscribe((x) => console.log(x)); // 50
    }
}
exports.PipePoc = PipePoc;
//# sourceMappingURL=rxjsPipe.js.map