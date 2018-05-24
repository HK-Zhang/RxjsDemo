"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WindowPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit immediately then every 1s
        const source = rxjs_1.timer(0, 1000);
        const example = source.pipe(operators_1.window(rxjs_1.interval(3000)));
        const count = example.pipe(operators_1.scan((acc, curr) => acc + 1, 0));
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
        const subscribe = count.subscribe((val) => console.log(`Window ${val}:`));
        const subscribeTwo = example.pipe(operators_1.mergeAll()).subscribe((val) => console.log(val));
    }
}
exports.WindowPoc = WindowPoc;
//# sourceMappingURL=rxjsWindow.js.map