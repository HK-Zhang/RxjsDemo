"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/bufferWhen");
require("rxjs/add/observable/interval");
class bufferWhenPoc {
    test() {
        this.func1();
    }
    func1() {
        //emit value every 1 second
        const oneSecondInterval = Observable_1.Observable.interval(1000);
        //return an observable that emits value every 5 seconds
        const fiveSecondInterval = () => Observable_1.Observable.interval(5000);
        //every five seconds, emit buffered values
        const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
        //log values
        //ex. output: [0,1,2,3]...[4,5,6,7,8]
        const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));
    }
}
exports.bufferWhenPoc = bufferWhenPoc;
//# sourceMappingURL=rxjsBufferWhen.js.map