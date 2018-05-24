"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
// import 'rxjs/add/Observable/of';
// import 'rxjs/add/Observable/interval';
// import 'rxjs/add/operator/take'
require("rxjs/add/operator/last");
class lastPoc {
    test() {
        this.func1();
        this.func2();
        this.func3();
    }
    func1() {
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5]);
        //no arguments, emit last value
        const example = source.last();
        //output: "Last value: 5"
        const subscribe = example.subscribe(val => console.log(`Last value: ${val}`));
    }
    func2() {
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5]);
        //emit last even number
        const exampleTwo = source.last(num => num % 2 === 0);
        //output: "Last to pass test: 4"
        const subscribeTwo = exampleTwo.subscribe(val => console.log(`Last to pass test: ${val}`));
    }
    func3() {
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5]);
        //supply an option projection function for the second parameter
        const exampleTwo = source.last(v => v > 4, v => `The highest emitted number was ${v}`);
        //output: 'The highest emitted number was 5'
        const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
    }
}
exports.lastPoc = lastPoc;
//# sourceMappingURL=rxjsLast.js.map