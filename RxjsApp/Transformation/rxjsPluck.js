"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class PluckPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        const source = rxjs_1.from([
            { name: "Joe", age: 30 },
            { name: "Sarah", age: 35 },
        ]);
        // grab names
        const example = source.pipe(operators_1.pluck("name"));
        // output: "Joe", "Sarah"
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        const source = rxjs_1.from([
            { name: "Joe", age: 30, job: { title: "Developer", language: "JavaScript" } },
            // will return undefined when no job is found
            { name: "Sarah", age: 35 },
        ]);
        // grab title property under job
        const example = source.pipe(operators_1.pluck("job", "title"));
        // output: "Developer" , undefined
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.PluckPoc = PluckPoc;
//# sourceMappingURL=rxjsPluck.js.map