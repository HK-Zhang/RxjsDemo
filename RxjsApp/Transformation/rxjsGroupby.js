"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class GroupByPoc {
    test() {
        this.func1();
    }
    func1() {
        const people = [
            { name: "Sue", age: 25 },
            { name: "Joe", age: 30 },
            { name: "Frank", age: 25 },
            { name: "Sarah", age: 35 },
        ];
        // emit each person
        const source = rxjs_1.from(people);
        // group by age
        const example = source.pipe(operators_1.groupBy((person) => person.age)
        // return each item in group as array
        , operators_1.mergeMap((group) => group.pipe(operators_1.toArray())));
        /*
          output:
          [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
          [{age: 30, name: "Joe"}]
          [{age: 35, name: "Sarah"}]
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.GroupByPoc = GroupByPoc;
//# sourceMappingURL=rxjsGroupby.js.map