"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
class StartWithPoc {
    test() {
        // this.func1();
        // this.func2();
        this.func3();
    }
    func1() {
        // emit (1,2,3)
        const source = Observable_1.Observable.of(1, 2, 3);
        // start with 0
        const example = source.startWith(0);
        // output: 0,1,2,3
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit ('World!', 'Goodbye', 'World!')
        const source = Observable_1.Observable.of("World!", "Goodbye", "World!");
        // start with 'Hello', concat current string to previous
        const example = source.startWith("Hello").scan((acc, curr) => `${acc} ${curr}`);
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
        const source = Observable_1.Observable.interval(1000);
        // start with -3, -2, -1
        const example = source.startWith(-3, -2, -1);
        // output: -3, -2, -1, 0, 1, 2....
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.StartWithPoc = StartWithPoc;
//# sourceMappingURL=RxjsStartWith.js.map