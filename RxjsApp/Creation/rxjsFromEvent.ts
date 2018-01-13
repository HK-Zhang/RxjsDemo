import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

export class EmptyPoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        ////create observable that emits click events
        //const source = Observable.fromEvent(document, 'click');
        ////map to string with given event timestamp
        //const example = source.map(event => `Event time: ${event.timeStamp}`);
        ////output (example): 'Event time: 7276.390000000001'
        //const subscribe = example.subscribe(val => console.log(val));
    }
}