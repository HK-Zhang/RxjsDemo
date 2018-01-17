﻿import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/observable/interval';


export class bufferCountPoc {

    test() {
        //this.func1();
        this.func2();

    }

    func1() {
        //Create an observable that emits a value every second
        const source = Observable.interval(1000);
        //After three values are emitted, pass on as an array of buffered values
        const bufferThree = source.bufferCount(3);
        //Print values to console
        //ex. output [0,1,2]...[3,4,5]
        const subscribe = bufferThree.subscribe(val =>
            console.log('Buffered Values:', val)
        );
    }

    func2() {
        //Create an observable that emits a value every second
        const source = Observable.interval(1000);
        /*
        bufferCount also takes second argument, when to start the next buffer
        for instance, if we have a bufferCount of 3 but second argument (startBufferEvery) of 1:
        1st interval value:
        buffer 1: [0]
        2nd interval value:
        buffer 1: [0,1]
        buffer 2: [1]
        3rd interval value:
        buffer 1: [0,1,2] Buffer of 3, emit buffer
        buffer 2: [1,2]
        buffer 3: [2]
        4th interval value:
        buffer 2: [1,2,3] Buffer of 3, emit buffer
        buffer 3: [2, 3]
        buffer 4: [3]
        */
        const bufferEveryOne = source.bufferCount(3, 1);
        //Print values to console
        const subscribe = bufferEveryOne.subscribe(val =>
            console.log('Start Buffer Every 1:', val)
        );
    }

}