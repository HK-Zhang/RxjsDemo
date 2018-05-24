"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/from");
require("rxjs/add/observable/merge");
require("rxjs/add/operator/map");
require("rxjs/add/operator/pluck");
const Observable_1 = require("rxjs/Observable");
class PluckPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        const source = Observable_1.Observable.from([
            { name: "Joe", age: 30 },
            { name: "Sarah", age: 35 },
        ]);
        // grab names
        const example = source.pluck("name");
        // output: "Joe", "Sarah"
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = Observable_1.Observable.from([
            { name: "Joe", age: 30, job: { title: "Developer", language: "JavaScript" } },
            // will return undefined when no job is found
            { name: "Sarah", age: 35 },
        ]);
        // grab title property under job
        const example = source.pluck("job", "title");
        // output: "Developer" , undefined
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.PluckPoc = PluckPoc;
//# sourceMappingURL=rxjsPluck.js.map