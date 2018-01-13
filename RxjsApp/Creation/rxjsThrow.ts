import { Observable } from 'rxjs/Observable';

export class ThrowPoc {
    test() {
        this.func1();
        //this.func2();
    }

    func1() {
        //emits an error with specified value on subscription
        const source = Observable.throw('This is an error!');
        //output: 'Error: This is an error!'
        const subscribe = source.subscribe({
            next: val => console.log(val),
            complete: () => console.log('Complete!'),
            error: val => console.log(`Error: ${val}`)
        });
    }
}