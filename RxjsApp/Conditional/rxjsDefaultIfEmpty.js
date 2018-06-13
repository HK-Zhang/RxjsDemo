"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DefaultIfEmptyPoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        const empty$ = rxjs_1.of();
        // emit 'Observable.of() Empty!' when empty, else any values from source
        const setDefault = operators_1.defaultIfEmpty("Observable.of() Empty!");
        const exampleOne = empty$.pipe(setDefault);
        // output: 'Observable.of() Empty!'
        const subscribe = exampleOne.subscribe((val) => console.log(val));
    }
    func2() {
        // empty observable
        const empty$ = rxjs_1.empty();
        // emit 'Observable.empty()!' when empty, else any values from source
        const setDefault = operators_1.defaultIfEmpty("Observable.empty()!");
        const example = empty$.pipe(setDefault);
        // output: 'Observable.empty()!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.DefaultIfEmptyPoc = DefaultIfEmptyPoc;
//# sourceMappingURL=rxjsDefaultIfEmpty.js.map