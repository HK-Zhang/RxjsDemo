"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
const Observable_1 = require("rxjs/Observable");
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
        let source = Observable_1.Observable.of(1, 2, 3, 4, 5);
        // output: 1,2,3,4,5
        const subscribe = source.subscribe((val) => console.log(val));
        source = Observable_1.Observable.of(6, 7);
    }
    func2() {
        const source = Observable_1.Observable.of(1, 2, 3);
        const target = source.map(tfx);
        target.subscribe((x) => console.log(x));
    }
    func3() {
        // emits values of any type
        const source = Observable_1.Observable.of({ name: "Brian" }, [1, 2, 3], function hello() {
            return "Hello";
        });
        // output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
exports.OfPoc = OfPoc;
//# sourceMappingURL=RxjsOf.js.map