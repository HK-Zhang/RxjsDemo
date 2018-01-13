import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/merge';

export class delayPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit one item
        const example = Observable.of(null);
        //delay output of each by an extra second
        const message = Observable.merge(
            example.mapTo('Hello'),
            example.mapTo('World!').delay(1000),
            example.mapTo('Goodbye').delay(2000),
            example.mapTo('World!').delay(3000)
        );
        //output: 'Hello'...'World!'...'Goodbye'...'World!'
        const subscribe = message.subscribe(val => console.log(val));
    }

}