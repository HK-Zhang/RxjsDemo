import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/observable/interval';


export class bufferWhenPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit value every 1 second
        const oneSecondInterval = Observable.interval(1000);
        //return an observable that emits value every 5 seconds
        const fiveSecondInterval = () => Observable.interval(5000);
        //every five seconds, emit buffered values
        const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
        //log values
        //ex. output: [0,1,2,3]...[4,5,6,7,8]
        const subscribe = bufferWhenExample.subscribe(val =>
            console.log('Emitted Buffer: ', val)
        );
    }

}