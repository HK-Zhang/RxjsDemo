"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/take");
require("rxjs/add/operator/multicast");
require("rxjs/add/observable/interval");
class multicastPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit every 2 seconds, take 5
        const source = Observable_1.Observable.interval(2000).take(5);
        const example = source
            .do(() => console.log('Side Effect #1'))
            .mapTo('Result!');
        //subscribe subject to source upon connect()
        const multi = example.multicast(() => new Subject_1.Subject());
        /*
          subscribers will share source
          output:
          "Side Effect #1"
          "Result!"
          "Result!"
          ...
        */
        const subscriberOne = multi.subscribe(val => console.log(val));
        const subscriberTwo = multi.subscribe(val => console.log(val));
        //subscribe subject to source
        multi.connect();
    }
}
exports.multicastPoc = multicastPoc;
//# sourceMappingURL=rxjsMulticast.js.map