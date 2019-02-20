"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/of");
const Observable_1 = require("rxjs/Observable");
class ToPromisePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // return basic observable
        const sample = (val) => Observable_1.Observable.of(val).delay(5000);
        // convert basic observable to promise
        const example = sample("First Example")
            .toPromise()
            .then((result) => {
            console.log("From Promise:", result);
        });
    }
    func2() {
        // return basic observable
        const sample = (val) => Observable_1.Observable.of(val).delay(5000);
        /*
          convert each to promise and use Promise.all
          to wait for all to resolve
        */
        const example = () => {
            return Promise.all([
                sample("Promise 1").toPromise(),
                sample("Promise 2").toPromise(),
            ]);
        };
        // output: ["Promise 1", "Promise 2"]
        example().then((val) => {
            console.log("Promise.all Result:", val);
        });
    }
}
exports.ToPromisePoc = ToPromisePoc;
//# sourceMappingURL=rxjsToPromise.js.map