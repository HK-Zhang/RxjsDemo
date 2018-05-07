"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const tfx = (item, index) => {
    return item * 2;
};
class OfPoc {
    test() {
        this.func1();
        // this.func3();
    }
    func1() {
        // emits any number of provided values in sequence
        let source = rxjs_1.of(1, 2, 3, 4, 5);
        // output: 1,2,3,4,5
        const subscribe = source.subscribe((val) => console.log(val));
        source = rxjs_1.of(6, 7);
    }
    func2() {
        const source = rxjs_1.of(1, 2, 3);
        const target = source.pipe(operators_1.map(tfx));
        target.subscribe((x) => console.log(x));
    }
    func3() {
        // emits values of any type
        const source = rxjs_1.of({ name: "Brian" }, [1, 2, 3], function hello() {
            return "Hello";
        });
        // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
exports.OfPoc = OfPoc;
//# sourceMappingURL=RxjsOf.js.map