import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/reduce';




export class reducePoc {

    test() {
        this.func1();
    }

    func1() {
        const source = Observable.of(1, 2, 3, 4);
        const example = source.reduce((acc, val) => acc + val);
        //output: Sum: 10'
        const subscribe = example.subscribe(val => console.log('Sum:', val));
    }


}