import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mergeAll";
import "rxjs/add/operator/windowWhen";
import { Observable } from "rxjs";

export class WindowWhenPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit immediately then every 1s
        const source = Observable.timer(0, 1000);
        const example = source
            // close window every 5s and emit observable of collected values from source
            .windowWhen(() => Observable.interval(5000))
            .do(() => console.log("NEW WINDOW!"));

        const subscribeTwo = example
            // window emits nested observable
            .mergeAll()
            /*
            output:
            "NEW WINDOW!"
            0
            1
            2
            3
            4
            "NEW WINDOW!"
            5
            6
            7
            8
            9
          */
            .subscribe((val) => console.log(val));
    }

}
