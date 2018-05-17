"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class TakewhilePoc {
    test() {
        this.func1();
        this.func2();
    }
    func1() {
        // emit 1,2,3,4,5
        const source = rxjs_1.of(1, 2, 3, 4, 5);
        // allow values until value from source is greater than 4, then complete
        const example = source.pipe(operators_1.takeWhile((val) => val <= 4));
        // output: 1,2,3,4
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
        const source = rxjs_1.of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);
        // allow values until value from source equals 3, then complete
        // output: [3, 3, 3]
        source.pipe(operators_1.takeWhile((it) => it === 3))
            .subscribe((val) => console.log("takeWhile", val));
        // output: [3, 3, 3, 3, 3, 3, 3]
        source.pipe(operators_1.filter((it) => it === 3)).subscribe((val) => console.log("filter", val));
    }
}
exports.TakewhilePoc = TakewhilePoc;
//# sourceMappingURL=rxjsTakewhile.js.map