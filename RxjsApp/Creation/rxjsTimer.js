"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/timer");
const Observable_1 = require("rxjs/Observable");
class TimerPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func1() {
        // emit 0 after 1 second then complete, since no second argument is supplied
        const source = Observable_1.Observable.timer(1000);
        // output: 0
        const subscribe = source.subscribe((val) => console.log(val));
    }
    func2() {
        /*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
        const source = Observable_1.Observable.timer(1000, 2000);
        // output: 0,1,2,3,4,5......
        const subscribe = source.subscribe((val) => console.log(val));
    }
}
exports.TimerPoc = TimerPoc;
//# sourceMappingURL=rxjsTimer.js.map