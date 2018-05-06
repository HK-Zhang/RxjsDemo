"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/interval");
require("rxjs/add/observable/race");
require("rxjs/add/operator/mapTo");
const rxjs_1 = require("rxjs");
class RacePoc {
    test() {
        this.func1();
        // this.func2();
    }
    func1() {
        // const win = Observable.interval(1000);
        // const fwin = win.mapTo('1s won!');
        // take the first observable to emit
        const example = rxjs_1.Observable.race(
        // emit every 1.5s
        rxjs_1.Observable.interval(1500), 
        // emit every 1s
        rxjs_1.Observable.interval(1000).mapTo("1s won!"), 
        // emit every 2s
        rxjs_1.Observable.interval(2000), 
        // emit every 2.5s
        rxjs_1.Observable.interval(2500));
        // output: "1s won!"..."1s won!"...etc
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        // Throws an error and ignore the rest of the observables.
        const first = rxjs_1.Observable.of("first")
            .delay(100)
            .map(() => {
            throw new Error("error");
        });
        const second = rxjs_1.Observable.of("second").delay(200);
        const third = rxjs_1.Observable.of("third").delay(300);
        const race = rxjs_1.Observable.race(first, second, third).subscribe((val) => console.log(val));
    }
}
exports.RacePoc = RacePoc;
//# sourceMappingURL=rxjsRace.js.map