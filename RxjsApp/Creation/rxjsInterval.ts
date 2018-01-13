import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

export class IntervalPoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        //emit value in sequence every 1 second
        const source = Observable.interval(1000);
        //output: 0,1,2,3,4,5....
        const subscribe = source.subscribe(val => console.log(val));
    }
}