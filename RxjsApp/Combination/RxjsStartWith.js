"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class StartWithPoc {
    test() {
        // this.func1();
        // this.func2();
        this.func3();
    }
    func1() {
        // emit (1,2,3)
        const source = rxjs_1.of(1, 2, 3);
        // start with 0
        const example = source.pipe(operators_1.startWith(0));
        // output: 0,1,2,3
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit ('World!', 'Goodbye', 'World!')
        const source = rxjs_1.of("World!", "Goodbye", "World!");
        // start with 'Hello', concat current string to previous
        const scanSource = operators_1.scan((acc, curr) => `${acc} ${curr}`);
        const example = source.pipe(operators_1.startWith("Hello"), scanSource);
        /*
          output:
          "Hello"
          "Hello World!"
          "Hello World! Goodbye"
          "Hello World! Goodbye World!"
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        // emit values in sequence every 1s
        const source = rxjs_1.interval(1000);
        // start with -3, -2, -1
        const example = source.pipe(operators_1.startWith(-3, -2, -1));
        // output: -3, -2, -1, 0, 1, 2....
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.StartWithPoc = StartWithPoc;
//# sourceMappingURL=RxjsStartWith.js.map