"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/from");
require("rxjs/add/operator/groupBy");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/toArray");
const Observable_1 = require("rxjs/Observable");
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
        const source = Observable_1.Observable.from(people);
        // group by age
        const example = source
            .groupBy((person) => person.age)
            .mergeMap((group) => group.toArray());
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