"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/takeUntil");
const rxjs_1 = require("rxjs");
class TakeUntilPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit value every 1s
        const source = rxjs_1.Observable.interval(1000);
        // after 5 seconds, emit value
        const timer = rxjs_1.Observable.timer(5000);
        // when timer emits after 5s, complete source
        const example = source.takeUntil(timer);
        // output: 0,1,2,3
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // emit value every 1s
        const source = rxjs_1.Observable.interval(1000);
        // is number even?
        const isEven = (val) => val % 2 === 0;
        // only allow values that are even
        const evenSource = source.filter(isEven);
        // keep a running total of the number of even numbers out
        const evenNumberCount = evenSource.scan((acc, _) => acc + 1, 0);
        // do not emit until 5 even numbers have been emitted
        const fiveEvenNumbers = evenNumberCount.filter((val) => val > 5);
        const example = evenSource
            .withLatestFrom(evenNumberCount)
            .map(([val, count]) => `Even number (${count}) : ${val}`)
            .takeUntil(fiveEvenNumbers);
        /*
            Even number (1) : 0,
            Even number (2) : 2
            Even number (3) : 4
            Even number (4) : 6
            Even number (5) : 8
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
exports.TakeUntilPoc = TakeUntilPoc;
//# sourceMappingURL=RxjsTakeUntil.js.map