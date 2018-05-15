import { interval, Observable, of, range, timer } from "rxjs";
import { catchError, delayWhen, map, mergeMap, retryWhen, tap, zip } from "rxjs/operators";


export class RetryWhenPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit value every 1s
        const source = interval(1000);
        const example  = source.pipe(
            map((val) => {
                if (val > 5) {
                    // error will be picked up by retryWhen
                    throw val;
                }
                return val;
            })
            , retryWhen((errors) =>
                errors.pipe(
                    // log error message
                    tap((val) => console.log(`Value ${val} was too high!`))
                    // restart in 5 seconds
                    , delayWhen((val) => timer(val * 1000)))));
        /*
          output:
          0
          1
          2
          3
          4
          5
          "Value 6 was too high!"
          --Wait 5 seconds then repeat
        */
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit value every 1s
        const source = interval(1000);
        const example = source.pipe(
            map((val) => {
                if (val > 2) {
                    // error will be picked up by retryWhen
                    throw val;
                }
                return val;
            })
            , retryWhen((attempts) => {
                return attempts.pipe(zip(range(1, 4)), mergeMap(([error, i]) => {
                    if (i > 3) {
                        return Observable.throw(error);
                    }
                    console.log(`Wait ${i} seconds, then retry!`);
                    return timer(i * 1000);
                }));
            })
            , catchError((_) => of("Ouch, giving up!")));

        const subscribe = example.subscribe((val) => console.log(val));
    }

}
