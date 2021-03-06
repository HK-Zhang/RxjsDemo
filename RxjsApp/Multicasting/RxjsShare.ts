﻿import "rxjs/add/operator/share";
import { Observable } from "rxjs/Observable";

export class SharePoc {
    public test() {
        // this.func1();
        this.func2();

    }

    public func2() {
        // emit value in 1s
        const source = Observable.timer(1000);
        // log side effect, emit result
        const example = source
            .do(() => console.log("***SIDE EFFECT***"))
            .mapTo("***RESULT***");
        /*
          ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***SIDE EFFECT***"
          "***RESULT***"
        */
        const subscribe = example.subscribe((val) => console.log(val));
        const subscribeTwo = example.subscribe((val) => console.log(val));

        // share observable among subscribers
        const sharedExample = example.share();
        /*
          ***SHARED, SIDE EFFECT EXECUTED ONCE***
          output:
          "***SIDE EFFECT***"
          "***RESULT***"
          "***RESULT***"
        */
        const subscribeThree = sharedExample.subscribe((val) => console.log(val));
        const subscribeFour = sharedExample.subscribe((val) => console.log(val));
    }


}
