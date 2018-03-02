"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
require("rxjs/add/operator/defaultIfEmpty");
const Observable_1 = require("rxjs/Observable");
class DefaultIfEmptyPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        const empty = Observable_1.Observable.of();
        // emit 'Observable.of() Empty!' when empty, else any values from source
        const exampleOne = empty.defaultIfEmpty("Observable.of() Empty!");
        // output: 'Observable.of() Empty!'
        const subscribe = exampleOne.subscribe((val) => console.log(val));
    }
    func2() {
        // empty observable
        const empty = Observable_1.Observable.empty();
        // emit 'Observable.empty()!' when empty, else any values from source
        const example = empty.defaultIfEmpty("Observable.empty()!");
        // output: 'Observable.empty()!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.DefaultIfEmptyPoc = DefaultIfEmptyPoc;
//# sourceMappingURL=rxjsDefaultIfEmpty.js.map