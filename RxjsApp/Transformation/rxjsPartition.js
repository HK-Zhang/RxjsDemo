"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class PartitionPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        const source = rxjs_1.from([1, 2, 3, 4, 5, 6]);
        // first value is true, second false
        const [evens, odds] = operators_1.partition((val) => val % 2 === 0)(source);
        /*
          Output:
          "Even: 2"
          "Even: 4"
          "Even: 6"
          "Odd: 1"
          "Odd: 3"
          "Odd: 5"
        */
        const subscribe = rxjs_1.merge(evens.pipe(operators_1.map((val) => `Even: ${val}`)), odds.pipe(operators_1.map((val) => `Odd: ${val}`))).subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.from([1, 2, 3, 4, 5, 6]);
        // if greater than 3 throw
        const example = source.pipe(operators_1.map((val) => {
            if (val > 3) {
                throw new Error(`${val} greater than 3!`);
            }
            return { success: val };
        }), operators_1.catchError((val) => rxjs_1.of({ error: val })));
        // split on success or error
        const [success, error] = operators_1.partition((res) => res.success)(example);
        /*
          Output:
          "Success! 1"
          "Success! 2"
          "Success! 3"
          "Error! 4 greater than 3!"
        */
        const subscribe = rxjs_1.merge(success.pipe(operators_1.map((val) => `Success! ${val.success}`)), error.pipe(operators_1.map((val) => `Error! ${val.error}`))).subscribe((val) => console.log(val));
    }
}
exports.PartitionPoc = PartitionPoc;
//# sourceMappingURL=rxjsPartition.js.map