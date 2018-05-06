"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/multicast");
require("rxjs/add/operator/take");
const rxjs_1 = require("rxjs");
const Subject_1 = require("rxjs/Subject");
class MulticastPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit every 2 seconds, take 5
        const source = rxjs_1.Observable.interval(2000).take(5);
        const example = source
            .do(() => console.log("Side Effect #1"))
            .mapTo("Result!");
        // subscribe subject to source upon connect()
        const multi = example.multicast(() => new Subject_1.Subject());
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