"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class CatchPoc {
    test() {
        // this.func1();
        // this.func2();
        this.func3();
    }
    func1() {
        // emit error
        const source = rxjs_1.throwError("This is an error!");
        // gracefully handle error, returning observable with error message
        const errorHandler = operators_1.catchError((val) => rxjs_1.of(`I caught: ${val}`));
        const example = source.pipe(errorHandler);
        // output: 'I caught: This is an error'
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // create promise that immediately rejects
        const myBadPromise = () => new Promise((resolve, reject) => reject("Rejected!"));
        // emit single value after 1 second
        const source = rxjs_1.timer(1000);
        // catch rejected promise, returning observable containing error message
        const errorHandler = operators_1.catchError((error) => rxjs_1.of(`Bad Promise: ${error}`));
        const promise$ = rxjs_1.from(myBadPromise()).pipe(errorHandler);
        const example = source.pipe(operators_1.flatMap(() => promise$));
        // output: 'Bad Promise: Rejected'
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func3() {
        // create promise that immediately rejects
        const myBadPromise = () => new Promise((resolve, reject) => resolve("Approve!"));
        // emit single value after 1 second
        const source = rxjs_1.timer(1000);
        // catch rejected promise, returning observable containing error message
        const errorHandler = operators_1.catchError((error) => rxjs_1.of(`Bad Promise: ${error}`));
        const promise$ = rxjs_1.from(myBadPromise()).pipe(errorHandler);
        const example = source.pipe(operators_1.flatMap(() => promise$));
        // output: 'Approve!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.CatchPoc = CatchPoc;
//# sourceMappingURL=RxjsCatchPoc.js.map