"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = require("typescript-collections");
var QueuePoc = /** @class */ (function () {
    function QueuePoc() {
    }
    QueuePoc.prototype.test = function () {
        this.func1();
    };
    QueuePoc.prototype.func1 = function () {
        var myQueue = new Collections.Queue();
        myQueue.enqueue(1);
        myQueue.enqueue(2);
        console.log(myQueue.dequeue()); // prints 1
        console.log(myQueue.dequeue()); // prints 2
    };
    return QueuePoc;
}());
exports.QueuePoc = QueuePoc;
//# sourceMappingURL=QueuePoc.js.map