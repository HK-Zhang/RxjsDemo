"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MapPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit (1,2,3,4,5)
        const source = rxjs_1.from([1, 2, 3, 4, 5]);
        // add 10 to each value
        const example = source.pipe(operators_1.map((val) => val + 10));
        // output: 11,12,13,14,15
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
        const source = rxjs_1.from([
            { name: "Joe", age: 30 },
            { name: "Frank", age: 20 },
            { name: "Ryan", age: 50 },
        ]);
        // grab each persons name
        const example = source.pipe(operators_1.map((person) => person.name));
        // output: "Joe","Frank","Ryan"
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.MapPoc = MapPoc;
//# sourceMappingURL=RxjsMap.js.map