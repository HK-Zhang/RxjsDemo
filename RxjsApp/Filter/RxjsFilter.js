"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class FilterPoc {
    test() {
        // this.func1();
        // this.func2();
        this.func3();
    }
    func1() {
        // emit (1,2,3,4,5)
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // filter out non-even numbers
        const example = source.pipe(operators_1.filter((num) => num % 2 === 0));
        // output: "Even number: 2", "Even number: 4"
        const subscribe = example.subscribe((val) => console.log(`Even number: ${val}`));
    }
    func2() {
        // emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
        const source = rxjs_1.from([
            { name: "Joe", age: 31 },
            { name: "Bob", age: 25 },
        ]);
        // filter out people with age under 30
        const example = source.pipe(operators_1.filter((person) => person.age >= 30));
        // output: "Over 30: Joe"
        const subscribe = example.subscribe((val) => console.log(`Over 30: ${val.name}`));
    }
    func3() {
        // emit every second
        const source = rxjs_1.interval(1000);
        // filter out all values until interval is greater than 5
        const example = source.pipe(operators_1.filter((num) => num > 5));
        /*
          "Number greater than 5: 6"
          "Number greater than 5: 7"
          "Number greater than 5: 8"
          "Number greater than 5: 9"
        */
        const subscribe = example.subscribe((val) => console.log(`Number greater than 5: ${val}`));
    }
}
exports.FilterPoc = FilterPoc;
//# sourceMappingURL=RxjsFilter.js.map