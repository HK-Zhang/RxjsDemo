import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/mergeAll";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/window";
import { Observable } from "rxjs";


export class WindowPoc {

    public test() {
        this.func1();
    }

    public func1() {
        // emit immediately then every 1s
        const source = Observable.timer(0, 1000);
        const example = source.window(Observable.interval(3000));
        const count = example.scan((acc, curr) => acc + 1, 0);
        /*
          "Window 1:"
          0
          1
          2
          "Window 2:"
          3
          4
          5
          ...
        */
        const subscribe = count.subscribe((val) => console.log(`Window ${val}:`));
        const subscribeTwo = example.mergeAll().subscribe((val) => console.log(val));
    }
}
