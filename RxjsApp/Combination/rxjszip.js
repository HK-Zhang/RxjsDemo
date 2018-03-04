"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const of_1 = require("rxjs/observable/of");
const zip_1 = require("rxjs/observable/zip");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
class ZipPoc {
    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }
    func1() {
        const sourceOne = of_1.of("Hello");
        const sourceTwo = of_1.of("World!");
        const sourceThree = of_1.of("Goodbye");
        const sourceFour = of_1.of("World!");
        // wait until all observables have emitted a value then emit all as an array
        const example = zip_1.zip(sourceOne, sourceTwo.pipe(operators_1.delay(1000)), sourceThree.pipe(operators_1.delay(2000)), sourceFour.pipe(operators_1.delay(3000)));
        // output: ["Hello", "World!", "Goodbye", "World!"]
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit every 1s
        const v = Observable_1.Observable.interval(1000);
        // when one observable completes no more values will be emitted
        const example = zip_1.zip(v, v.pipe(operators_2.take(2)));
        // output: [0,0]...[1,1]
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        const source = Observable_1.Observable.of("src");
        const example = source.zip(Observable_1.Observable.range(1, 4));
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func4() {
        const source = Observable_1.Observable.interval(1000);
        const example = source.zip(Observable_1.Observable.range(1, 4));
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.ZipPoc = ZipPoc;
//# sourceMappingURL=rxjszip.js.map