import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

export class delayWhenPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit value every second
        const message = Observable.interval(1000);
        //emit value after five seconds
        const delayForFiveSeconds = () => Observable.timer(5000);
        //after 5 seconds, start emitting delayed interval values
        const delayWhenExample = message.delayWhen(delayForFiveSeconds);
        //log values, delayed for 5 seconds
        //ex. output: 5s....1...2...3
        const subscribe = delayWhenExample.subscribe(val => console.log(val));
    }

}
