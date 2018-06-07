"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DebouncePoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit four strings
        const example = rxjs_1.of("WAIT", "ONE", "SECOND", "Last will display");
        /*
            Only emit values after a second has passed between the last emission,
            throw away all other values
        */
        const debouncedExample = example.pipe(operators_1.debounce(() => rxjs_1.timer(1000)));
        /*
            In this example, all values but the last will be omitted
            output: 'Last will display'
        */
        const subscribe = debouncedExample.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1 second, ex. 0...1...2
        const interval$ = rxjs_1.interval(1000);
        // raise the debounce time by 200ms each second
        const debouncedInterval = interval$.pipe(operators_1.debounce((val) => rxjs_1.timer(val * 200)));
        /*
          After 5 seconds, debounce time will be greater than interval time,
          all future values will be thrown away
          output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
        */
        const subscribe = debouncedInterval.subscribe((val) => console.log(`Example Two: ${val}`));
    }
}
exports.DebouncePoc = DebouncePoc;
//# sourceMappingURL=rxjsdebounce.js.map