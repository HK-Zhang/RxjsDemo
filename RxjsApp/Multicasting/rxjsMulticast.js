"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MulticastPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit every 2 seconds, take 5
        const source = rxjs_1.interval(2000).pipe(operators_1.take(5));
        const example = source.pipe(
        // since we are multicasting below, side effects will be executed once
        operators_1.tap(() => console.log("Side Effect #1")), operators_1.mapTo("Result!"));
        // subscribe subject to source upon connect()
        const multi = example.pipe(operators_1.multicast(() => new rxjs_1.Subject()));
        /*
          subscribers will share source
          output:
          "Side Effect #1"
          "Result!"
          "Result!"
          ...
        */
        const subscriberOne = multi.subscribe((val) => console.log(val));
        const subscriberTwo = multi.subscribe((val) => console.log(val));
        // subscribe subject to source
        multi.connect();
    }
}
exports.MulticastPoc = MulticastPoc;
//# sourceMappingURL=rxjsMulticast.js.map