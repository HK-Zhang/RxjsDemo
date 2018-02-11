import "rxjs/add/operator/withLatestFrom";
import { Observable } from "rxjs/Observable";

export class WithLatestFromPoc {
    public test() {
        // this.func1();
        // this.func2();
        this.func0();
    }

    public func0() {
        // emit value every 1s
        const source = Observable.of("a", "b", "c");
        const secondSource = Observable.interval(3000);
        const combindSource = secondSource.withLatestFrom(source).map(([f, s]) => s);
        const result = combindSource.subscribe((x) => console.log(x));
    }

    public func1() {
        // emit every 5s
        const source = Observable.interval(5000);
        // emit every 1s
        const secondSource = Observable.interval(1000);
        const example = source.withLatestFrom(secondSource).map(([first, second]) => {
            return `First Source (5s): ${first} Second Source (1s): ${second}`;
        });
        /*
          "First Source (5s): 0 Second Source (1s): 4"
          "First Source (5s): 1 Second Source (1s): 9"
          "First Source (5s): 2 Second Source (1s): 14"
          ...
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit every 5s
        const source = Observable.interval(5000);
        // emit every 1s
        const secondSource = Observable.interval(1000);
        // withLatestFrom slower than source
        const example = secondSource
            // both sources must emit at least 1 value (5s) before emitting
            .withLatestFrom(source)
            .map(([first, second]) => {
                return `Source (1s): ${first} Latest From (5s): ${second}`;
            });
        /*
          "Source (1s): 4 Latest From (5s): 0"
          "Source (1s): 5 Latest From (5s): 0"
          "Source (1s): 6 Latest From (5s): 0"
          ...
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

}