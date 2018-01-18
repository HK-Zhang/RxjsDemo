"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/scan");
require("rxjs/add/operator/window");
require("rxjs/add/operator/mergeAll");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/timer");
class windowPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit immediately then every 1s
        const source = Observable_1.Observable.timer(0, 1000);
        const example = source.window(Observable_1.Observable.interval(3000));
        const count = example.scan((acc, curr) => acc + 1, 0);
        /*
          "Window 1:"
          0
          1
          2
          "Window 2:"
          3
          4
          5
          ...
        */
        const subscribe = count.subscribe(val => console.log(`Window ${val}:`));
        const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));
    }
}
exports.windowPoc = windowPoc;
//# sourceMappingURL=rxjsWindow.js.map