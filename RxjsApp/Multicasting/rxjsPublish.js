"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class PublishPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every 1 second
        const source = rxjs_1.interval(1000);
        const example = source.pipe(
        // side effects will be executed once
        operators_1.tap(() => console.log("Do Something!"))
        // do nothing until connect() is called
        , operators_1.publish());
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