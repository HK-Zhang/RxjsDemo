import "rxjs/add/observable/interval";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/exhaustMap";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/take";
import { Observable } from "rxjs";



export class ExhaustMapPoc {

    public test() {
        this.func1();
        // this.func2();

    }

    public func1() {
        const interval = Observable.interval(1000);
        const interval2 = Observable.interval(500);
        const delayedInterval = interval.delay(10).take(4);

        const exhaustSub = Observable.merge(
            // delay 10ms, then start interval emitting 4 values
            delayedInterval,
            // emit immediately
            Observable.of(true),
        )
        // .do((val) => console.log(val))
            /*
             *  The first emitted value (of(true)) will be mapped
             *  to an interval observable emitting 1 value every
             *  second, completing after 5.
             *  Because the emissions from the delayed interval
             *  fall while this observable is still active they will be ignored.
             *
             *  Contrast this with concatMap which would queue,
             *  switchMap which would switch to a new inner observable each emission,
             *  and mergeMap which would maintain a new subscription for each emitted value.
             */
            .exhaustMap((_) => interval2.take(10))
            // .switchMap((_) => interval2.take(10))
            // .mergeMap((_) => interval2.take(10))
            // output: 0, 1, 2, 3, 4
            .subscribe((val) => console.log(val));
    }

    public func2() {
        const firstInterval = Observable.interval(1000).take(10);
        const secondInterval = Observable.interval(1000).take(2);

        const exhaustSub = firstInterval
            .do((i) => console.log(`Emission of first interval: ${i}`))
            .exhaustMap((f) => secondInterval)
            /*
            When we subscribed to the first interval, it starts to emit a values (startinng 0).
            This value is mapped to the second interval which then begins to emit (starting 0).
            While the second interval is active, values from the first interval are ignored.
            We can see this when firstInterval emits number 3,6, and so on...

              Output:
              Emission of first interval: 0
              0
              1
              Emission of first interval: 3
              0
              1
              Emission of first interval: 6
              0
              1
              Emission of first interval: 9
              0
              1
          */
            .subscribe((s) => console.log(s));
    }

}
