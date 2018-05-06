import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mergeAll";
import "rxjs/add/operator/windowToggle";
import { Observable } from "rxjs";



export class WindowTogglePoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit immediately then every 1s
        const source = Observable.timer(0, 1000);
        // toggle window on every 5
        const toggle = Observable.interval(5000);
        const example = source
            // turn window on every 5s
            .windowToggle(toggle, (val) => {
                console.log("N" + val);
                return Observable.interval(val * 1000);
                // return Observable.interval(5 * 1000);
            })
            .do(() => console.log("NEW WINDOW!"));

        const subscribeTwo = example
            // window emits nested observable
            .mergeAll()
            /*
            output:
            "NEW WINDOW!"
            5
            "NEW WINDOW!"
            10
            11
            "NEW WINDOW!"
            15
            16
            "NEW WINDOW!"
            20
            21
            22
          */
            .subscribe((val) => console.log(val));
    }


}
