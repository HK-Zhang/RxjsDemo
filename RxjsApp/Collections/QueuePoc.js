"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collections = require("typescript-collections");
class QueuePoc {
    test() {
        this.func1();
    }
    func1() {
        const myQueue = new Collections.Queue();
        myQueue.enqueue(1);
        myQueue.enqueue(2);
        console.log(myQueue.dequeue()); // prints 1
        console.log(myQueue.dequeue()); // prints 2
    }
}
exports.QueuePoc = QueuePoc;
//# sourceMappingURL=QueuePoc.js.map