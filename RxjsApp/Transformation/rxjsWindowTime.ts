import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/windowTime';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/observable/timer';



export class windowTimePoc {

    test() {
        this.func1();
    }

    func1() {
        //emit immediately then every 1s
        const source = Observable.timer(0, 1000);
        const example = source
            //start new window every 3s
            .windowTime(3000)
            .do(() => console.log('NEW WINDOW!'));

        const subscribeTwo = example
            //window emits nested observable
            .mergeAll()
            /*
            output:
            "NEW WINDOW!"
            0
            1
            2
            "NEW WINDOW!"
            3
            4
            5
          */
            .subscribe(val => console.log(val));
    }


}