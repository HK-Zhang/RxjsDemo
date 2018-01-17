"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/partition");
require("rxjs/add/operator/map");
require("rxjs/add/observable/from");
require("rxjs/add/observable/merge");
class partitionPoc {
    test() {
        //this.func1();
        this.func2();
    }
    func1() {
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5, 6]);
        //first value is true, second false
        const [evens, odds] = source.partition(val => val % 2 === 0);
        /*
          Output:
          "Even: 2"
          "Even: 4"
          "Even: 6"
          "Odd: 1"
          "Odd: 3"
          "Odd: 5"
        */
        const subscribe = Observable_1.Observable.merge(evens.map(val => `Even: ${val}`), odds.map(val => `Odd: ${val}`)).subscribe(val => console.log(val));
    }
    func2() {
        const source = Observable_1.Observable.from([1, 2, 3, 4, 5, 6]);
        //if greater than 3 throw
        const example = source
            .map(val => {
            if (val > 3) {
                throw `${val} greater than 3!`;
            }
            return { success: val };
        })
            .catch(val => Observable_1.Observable.of({ error: val }));
        //split on success or error
        const [success, error] = example.partition((res) => res.success);
        /*
          Output:
          "Success! 1"
          "Success! 2"
          "Success! 3"
          "Error! 4 greater than 3!"
        */
        const subscribe = Observable_1.Observable.merge(success.map(val => `Success! ${val.success}`), error.map(val => `Error! ${val.error}`)).subscribe(val => console.log(val));
    }
}
exports.partitionPoc = partitionPoc;
//# sourceMappingURL=rxjsPartition.js.map