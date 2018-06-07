"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DebounceTimePoc {
    test() {
        this.func1();
    }
    func1() {
        const times = [
            { value: 0, time: 100 },
            { value: 1, time: 600 },
            { value: 2, time: 400 },
            { value: 3, time: 700 },
            { value: 4, time: 200 },
        ];
        // Delay each item by time and project value;
        const source = rxjs_1.from(times).pipe(operators_1.flatMap((item) => {
            return rxjs_1.of(item.value).pipe(operators_1.delay(item.time));
        }), operators_1.debounceTime(500 /* ms */));
        const subscription = source.subscribe((x) => {
            console.log("Next: %s", x);
        }, (err) => {
            console.log("Error: %s", err);
        }, () => {
            console.log("Completed");
        });
        // => Next: 3
        // => Completed
    }
}
exports.DebounceTimePoc = DebounceTimePoc;
//# sourceMappingURL=RxjsDebounceTime.js.map