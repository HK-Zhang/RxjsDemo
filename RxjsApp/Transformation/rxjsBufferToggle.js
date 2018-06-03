"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class BufferTogglePoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every second
        const sourceInterval = rxjs_1.interval(1000);
        // start first buffer after 5s, and every 5s after
        const startInterval = rxjs_1.interval(5000);
        // emit value after 3s, closing corresponding buffer
        const closingInterval = (val) => {
            console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
            return rxjs_1.interval(3000);
        };
        // every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
        const bufferToggleInterval = sourceInterval.pipe(operators_1.bufferToggle(startInterval, closingInterval));
        // log to console
        // ex. emitted buffers [4,5,6]...[9,10,11]
        const subscribe = bufferToggleInterval.subscribe((val) => console.log("Emitted Buffer:", val));
    }
}
exports.BufferTogglePoc = BufferTogglePoc;
//# sourceMappingURL=rxjsBufferToggle.js.map