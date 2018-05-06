"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/from");
require("rxjs/add/observable/of");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/let");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/retry");
const rxjs_1 = require("rxjs");
class LetPoc {
    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }
    func1() {
        // custom error handling logic
        const retryThreeTimes = (obs) => obs.retry(3).catch((_) => rxjs_1.Observable.of("ERROR!"));
        const examplePromise = (val) => new Promise((resolve) => resolve(`Complete: ${val}`));
        // faking request
        const subscribe = rxjs_1.Observable.of("some_url")
            .mergeMap((url) => examplePromise(url))
            .let(retryThreeTimes)
            .subscribe((result) => console.log(result));
        const customizableRetry = (retryTimes) => (obs) => obs.retry(retryTimes).catch((_) => rxjs_1.Observable.of("ERROR!"));
        // faking request
        const secondSubscribe = rxjs_1.Observable.of("some_url")
            .mergeMap((url) => examplePromise(url))
            .let(customizableRetry(3))
            .subscribe((result) => console.log(result));
    }
    func2() {
        // emit array as a sequence
        const source = rxjs_1.Observable.from([1, 2, 3, 4, 5]);
        // demonstrating the difference between let and other operators
        const test = source
            .map((val) => val + 1)
            .subscribe((val) => console.log("VALUE FROM ARRAY: ", val));
        const subscribe = source
            .map((val) => val + 1)
            .let((obs) => obs.map((val) => val + 2))
            .subscribe((val) => console.log("VALUE FROM ARRAY WITH let: ", val));
    }
    func3() {
        // emit array as a sequence
        const source = rxjs_1.Observable.from([1, 2, 3, 4, 5]);
        // let provides flexibility to add multiple operators to source observable then return
        const subscribeTwo = source
            .map((val) => val + 1)
            .let((obs) => obs
            .map((val) => val + 2)
            .filter((val) => val % 2 === 0))
            .subscribe((val) => console.log("let WITH MULTIPLE OPERATORS: ", val));
    }
    func4() {
        // emit array as a sequence
        const source = rxjs_1.Observable.from([1, 2, 3, 4, 5]);
        // pass in your own function to add operators to observable
        const obsArrayPlusYourOperators = (yourAppliedOperators) => {
            return source.map((val) => val + 1).let(yourAppliedOperators);
        };
        const addTenThenTwenty = (obs) => obs.map((val) => val + 10).map((val) => val + 20);
        const subscribe = obsArrayPlusYourOperators(addTenThenTwenty)
            .subscribe((val) => console.log("let FROM FUNCTION:", val));
    }
}
exports.LetPoc = LetPoc;
//# sourceMappingURL=rxjsLet.js.map