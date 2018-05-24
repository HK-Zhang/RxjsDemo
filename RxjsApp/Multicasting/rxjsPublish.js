"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/operator/do");
require("rxjs/add/operator/publish");
const Observable_1 = require("rxjs/Observable");
class PublishPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every 1 second
        const source = Observable_1.Observable.interval(1000);
        const example = source
            .do(() => console.log("Do Something!"))
            .publish();
        /*
          source will not emit values until connect() is called
          output: (after 5s)
          "Do Something!"
          "Subscriber One: 0"
          "Subscriber Two: 0"
          "Do Something!"
          "Subscriber One: 1"
          "Subscriber Two: 1"
        */
        const subscribe = example.subscribe((val) => console.log(`Subscriber One: ${val}`));
        const subscribeTwo = example.subscribe((val) => console.log(`Subscriber Two: ${val}`));
        // call connect after 5 seconds, causing source to begin emitting items
        setTimeout(() => {
            example.connect();
        }, 5000);
    }
}
exports.PublishPoc = PublishPoc;
//# sourceMappingURL=rxjsPublish.js.map