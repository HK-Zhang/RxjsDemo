import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/interval';


export class maptoPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit value every two seconds
        const source = Observable.interval(2000);
        //map all emissions to one value
        const example = source.mapTo('HELLO WORLD!');
        //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
        const subscribe = example.subscribe(val => console.log(val));
    }

    func2() {
        ////emit every click on document
        //const source = Observable.fromEvent(document, 'click');
        ////map all emissions to one value
        //const example = source.mapTo('GOODBYE WORLD!');
        ////output: (click)'GOODBYE WORLD!'...
        //const subscribe = example.subscribe(val => console.log(val));
    }

}