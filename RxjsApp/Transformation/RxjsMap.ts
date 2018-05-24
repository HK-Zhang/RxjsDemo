import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

export class MapPoc {
    public test(): void {
        this.func1();
    }

    public func1(): void {
        // emit (1,2,3,4,5)
        const source: Observable<number> = Observable.from([1, 2, 3, 4, 5]);
        // add 10 to each value
        const example: Observable<number> = source.map((val) => val + 10);
        // output: 11,12,13,14,15
        const subscribe: Subscription = example.subscribe((val) => console.log(val));
    }

    public func2(): void {
        // emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
        const source = Observable.from([
            { name: "Joe", age: 30 },
            { name: "Frank", age: 20 },
            { name: "Ryan", age: 50 },
        ]);
        // grab each persons name
        const example = source.map((person) => person.name);
        // output: "Joe","Frank","Ryan"
        const subscribe = example.subscribe((val) => console.log(val));
    }
}
