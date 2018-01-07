﻿var Rx = require('rxjs/Rx');

export class BufferTimePoc {
    test() {
        this.func1();
        this.func2();
    }

    func1() {
        //Create an observable that emits a value every 500ms
        const source = Rx.Observable.interval(500);
        //After 2 seconds have passed, emit buffered values as an array
        const example = source.bufferTime(2000);
        //Print values to console
        //ex. output [0,1,2]...[3,4,5,6]
        const subscribe = example.subscribe(val =>
            console.log('Buffered with Time:', val)
        );
    }

    func2() {
        //Create an observable that emits a value every 500ms
        const source = Rx.Observable.interval(500);
        /*
        bufferTime also takes second argument, when to start the next buffer (time in ms)
        for instance, if we have a bufferTime of 2 seconds but second argument (bufferCreationInterval) of 1 second:
        ex. output: [0,1,2]...[1,2,3,4,5]...[3,4,5,6,7]
        */
        const example = source.bufferTime(2000, 1000);
        //Print values to console
        const subscribe = example.subscribe(val =>
            console.log('Start Buffer Every 1s:', val)
        );
    }
}