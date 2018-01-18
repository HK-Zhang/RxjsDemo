import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/windowToggle';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';




export class windowTogglePoc {

    test() {
        this.func1();
    }

    func1() {
        //emit immediately then every 1s
        const source = Observable.timer(0, 1000);
        //toggle window on every 5
        const toggle = Observable.interval(5000);
        const example = source
            //turn window on every 5s
            .windowToggle(toggle, val => Observable.interval(val * 1000))
            .do(() => console.log('NEW WINDOW!'));

        const subscribeTwo = example
            //window emits nested observable
            .mergeAll()
            /*
            output:
            "NEW WINDOW!"
            5
            "NEW WINDOW!"
            10
            11
            "NEW WINDOW!"
            15
            16
            "NEW WINDOW!"
            20
            21
            22
          */
            .subscribe(val => console.log(val));
    }


}