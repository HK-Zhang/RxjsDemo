import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/skipUntil'



export class skipUntilPoc {

    test() {
        this.func1();
        // this.func2();
    }

    func1() {
        //emit every 1s
        const source = Observable.interval(1000);
        //skip emitted values from source until inner observable emits (6s)
        const example = source.skipUntil(Observable.timer(6000));
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
    }

}