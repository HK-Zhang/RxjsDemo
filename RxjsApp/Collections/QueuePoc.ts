﻿import * as Collections from "typescript-collections";

export class QueuePoc {
    public test() {
        this.func1();
    }

    public func1() {
        const myQueue = new Collections.Queue();
        myQueue.enqueue(1);
        myQueue.enqueue(2);

        console.log(myQueue.dequeue()); // prints 1
        console.log(myQueue.dequeue()); // prints 2
    }

}
