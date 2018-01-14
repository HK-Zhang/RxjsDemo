import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publish';
import 'rxjs/add/observable/interval';

export class publishPoc {

    test() {
        this.func1();
    }

    func1() {
        //emit value every 1 second
        const source = Observable.interval(1000);
        const example = source
            //side effects will be executed once
            .do(() => console.log('Do Something!'))
            //do nothing until connect() is called
            .publish();

        /*
          source will not emit values until connect() is called
          output: (after 5s) 
          "Do Something!"
          "Subscriber One: 0"
          "Subscriber Two: 0"
          "Do Something!"
          "Subscriber One: 1"
          "Subscriber Two: 1"
        */
        const subscribe = example.subscribe(val =>
            console.log(`Subscriber One: ${val}`)
        );
        const subscribeTwo = example.subscribe(val =>
            console.log(`Subscriber Two: ${val}`)
        );

        //call connect after 5 seconds, causing source to begin emitting items
        setTimeout(() => {
            example.connect();
        }, 5000);
    }

}