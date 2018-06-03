"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class BufferWhenPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every 1 second
        const oneSecondInterval = rxjs_1.interval(1000);
        // return an observable that emits value every 5 seconds
        const fiveSecondInterval = () => rxjs_1.interval(5000);
        // every five seconds, emit buffered values
        const bufferWhenExample = oneSecondInterval.pipe(operators_1.bufferWhen(fiveSecondInterval));
        // log values
        // ex. output: [0,1,2,3]...[4,5,6,7,8]
        const subscribe = bufferWhenExample.subscribe((val) => console.log("Emitted Buffer: ", val));
    }
}
exports.BufferWhenPoc = BufferWhenPoc;
//# sourceMappingURL=rxjsBufferWhen.js.map