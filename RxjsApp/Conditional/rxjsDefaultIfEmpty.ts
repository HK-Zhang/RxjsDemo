import { empty, Observable, of } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";


export class DefaultIfEmptyPoc {
    public test() {
        this.func1();
        // this.func2();
    }

    public func1() {
        const empty$ = of();
        // emit 'Observable.of() Empty!' when empty, else any values from source
        const exampleOne = empty$.pipe(defaultIfEmpty("Observable.of() Empty!"));
        // output: 'Observable.of() Empty!'
        const subscribe = exampleOne.subscribe((val) => console.log(val));
    }

    public func2() {
        // empty observable
        const empty$ = empty();
        // emit 'Observable.empty()!' when empty, else any values from source
        const example = empty$.pipe(defaultIfEmpty("Observable.empty()!"));
        // output: 'Observable.empty()!'
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
