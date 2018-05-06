import "rxjs/add/observable/from";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/operator/pluck";
import { Observable } from "rxjs";


export class PluckPoc {

    public test() {
        // this.func1();
        this.func2();
    }

    public func1() {
        const source = Observable.from([
            { name: "Joe", age: 30 },
            { name: "Sarah", age: 35 },
        ]);
        // grab names
        const example = source.pluck("name");
        // output: "Joe", "Sarah"
        const subscribe = example.subscribe((val) => console.log(val));
    }

    public func2() {
        const source = Observable.from([
            { name: "Joe", age: 30, job: { title: "Developer", language: "JavaScript" } },
            // will return undefined when no job is found
            { name: "Sarah", age: 35 },
        ]);
        // grab title property under job
        const example = source.pluck("job", "title");
        // output: "Developer" , undefined
        const subscribe = example.subscribe((val) => console.log(val));
    }

}
