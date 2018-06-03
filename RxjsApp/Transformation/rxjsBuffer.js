"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class BufferPoc {
    test() {
        this.func1();
    }
    func1() {
        // Create an observable that emits a value every second
        const myInterval = rxjs_1.interval(1000);
        // Create an observable that emits every time document is clicked
        // const bufferBy = Observable.fromEvent(document, 'click');
        const bufferBy = rxjs_1.interval(5000);
        /*
        Collect all values emitted by our interval observable until we click document.
        This will cause the bufferBy Observable to emit a value, satisfying the buffer.
        Pass us all collected values since last buffer as an array.
        */
        const myBufferedInterval = myInterval.pipe(operators_1.buffer(bufferBy));
        // Print values to console
        // ex. output: [1,2,3] ... [4,5,6,7,8]
        const subscribe = myBufferedInterval.subscribe((val) => console.log(" Buffered Values:", val));
    }
}
exports.BufferPoc = BufferPoc;
//# sourceMappingURL=rxjsBuffer.js.map