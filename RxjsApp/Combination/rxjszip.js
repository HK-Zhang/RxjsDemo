"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ZipPoc {
    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }
    func1() {
        const sourceOne = rxjs_1.of("Hello");
        const sourceTwo = rxjs_1.of("World!");
        const sourceThree = rxjs_1.of("Goodbye");
        const sourceFour = rxjs_1.of("World!");
        // wait until all observables have emitted a value then emit all as an array
        const example = rxjs_1.zip(sourceOne, sourceTwo.pipe(operators_1.delay(1000)), sourceThree.pipe(operators_1.delay(2000)), sourceFour.pipe(operators_1.delay(3000)));
        // output: ["Hello", "World!", "Goodbye", "World!"]
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit every 1s
        const v = rxjs_1.interval(1000);
        // when one observable completes no more values will be emitted
        const example = rxjs_1.zip(v, v.pipe(operators_1.take(2)));
        // output: [0,0]...[1,1]
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        const source = rxjs_1.of("src");
        const example = source.pipe(operators_1.zip(rxjs_1.range(1, 4)));
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func4() {
        const source = rxjs_1.interval(1000);
        const example = source.pipe(operators_1.zip(rxjs_1.range(1, 4)));
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.ZipPoc = ZipPoc;
//# sourceMappingURL=rxjszip.js.map