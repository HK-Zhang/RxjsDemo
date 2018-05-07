import { Observable, of } from "rxjs";
import { every } from "rxjs/operators";


export class EveryPoc {
    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        // emit 5 values
        const source = of(1, 2, 3, 4, 5);
        const example = source.pipe(
            // is every value even?
            every((val) => val % 2 === 0));
        // output: false
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        // emit 5 values
        const allEvens = of(2, 4, 6, 8, 10);
        const example = allEvens.pipe(
            // is every value even?
            every((val) => val % 2 === 0));
        // output: true
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
