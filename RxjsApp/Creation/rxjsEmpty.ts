import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

export class EmptyPoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        //Create observable that immediately completes
        const example = Observable.empty();
        //output: 'Complete!'
        const subscribe = example.subscribe({
            next: () => console.log('Next'),
            complete: () => console.log('Complete!')
        });
    }
}