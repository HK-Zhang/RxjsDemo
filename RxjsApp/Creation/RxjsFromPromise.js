"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Promise = require("promise");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class FromPromisePoc {
    test() {
        this.func1();
    }
    func1() {
        // example promise that will resolve or reject based on input
        const myPromise = (willReject) => {
            return new Promise((resolve, reject) => {
                if (willReject) {
                    reject("Rejected!");
                }
                resolve("Resolved!");
            });
        };
        // emit true, then false
        const source = rxjs_1.of(true, false);
        const example = source.pipe(operators_1.mergeMap((val) => rxjs_1.from(myPromise(val)).pipe(// catch and gracefully handle rejections
        operators_1.catchError((error) => rxjs_1.of(`Error: ${error}`)))));
        // output: 'Error: Rejected!', 'Resolved!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.FromPromisePoc = FromPromisePoc;
//# sourceMappingURL=RxjsFromPromise.js.map