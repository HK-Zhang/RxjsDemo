"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/buffer");
require("rxjs/add/observable/interval");
//import 'rxjs/add/observable/fromEvent';
class bufferPoc {
    test() {
        this.func1();
    }
    func1() {
        //Create an observable that emits a value every second
        const myInterval = Observable_1.Observable.interval(1000);
        //Create an observable that emits every time document is clicked
        //const bufferBy = Observable.fromEvent(document, 'click');
        const bufferBy = Observable_1.Observable.interval(5000);
        /*
        Collect all values emitted by our interval observable until we click document. This will cause the bufferBy Observable to emit a value, satisfying the buffer. Pass us all collected values since last buffer as an array.
        */
        const myBufferedInterval = myInterval.buffer(bufferBy);
        //Print values to console
        //ex. output: [1,2,3] ... [4,5,6,7,8]
        const subscribe = myBufferedInterval.subscribe(val => console.log(' Buffered Values:', val));
    }
}
exports.bufferPoc = bufferPoc;
//# sourceMappingURL=rxjsBuffer.js.map