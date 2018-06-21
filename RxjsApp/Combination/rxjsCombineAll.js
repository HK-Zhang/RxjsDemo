"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class CombineAllPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // emit every 1s, take 2
        const source = rxjs_1.interval(1000).pipe(operators_1.take(2));
        const composeRst = (val) => operators_1.map((i) => `Result (${val}): ${i}`);
        const secondSource = (val) => rxjs_1.interval(1000).pipe(composeRst(val), operators_1.take(5));
        const toSecondSource = operators_1.map((val) => secondSource(val));
        // map each emitted value from source to interval observable that takes 5 values
        const example = source.pipe(toSecondSource);
        /*
          2 values from source will map to 2 (inner) interval observables that emit every 1s
          combineAll uses combineLatest strategy, emitting the last value from each
          whenever either observable emits a value
        */
        const combined = example.pipe(operators_1.combineAll());
        /*
          output:
          ["Result (0): 0", "Result (1): 0"]
          ["Result (0): 1", "Result (1): 0"]
          ["Result (0): 1", "Result (1): 1"]
          ["Result (0): 2", "Result (1): 1"]
          ["Result (0): 2", "Result (1): 2"]
          ["Result (0): 3", "Result (1): 2"]
          ["Result (0): 3", "Result (1): 3"]
          ["Result (0): 4", "Result (1): 3"]
          ["Result (0): 4", "Result (1): 4"]
        */
        const subscribe = combined.subscribe((val) => console.log(val));
    }
}
exports.CombineAllPoc = CombineAllPoc;
//# sourceMappingURL=rxjsCombineAll.js.map