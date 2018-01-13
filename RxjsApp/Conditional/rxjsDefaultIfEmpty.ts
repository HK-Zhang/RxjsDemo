import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/timer';

export class DefaultIfEmptyPoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        const empty = Observable.of();
        //emit 'Observable.of() Empty!' when empty, else any values from source
        const exampleOne = empty.defaultIfEmpty('Observable.of() Empty!');
        //output: 'Observable.of() Empty!'
        const subscribe = exampleOne.subscribe(val => console.log(val));
    }

    func2() {
        //empty observable
        const empty = Observable.empty();
        //emit 'Observable.empty()!' when empty, else any values from source
        const example = empty.defaultIfEmpty('Observable.empty()!');
        //output: 'Observable.empty()!'
        const subscribe = example.subscribe(val => console.log(val));
    }
}