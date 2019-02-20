import { ReplaySubject } from "rxjs/ReplaySubject";

export class ReplaySubjectPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const sub = new ReplaySubject(2);
        sub.next("a");
        sub.next("b");
        sub.next("c");
        const subscription = sub.subscribe(
            (t) => {console.log("Next:" + t); },
            (err) => {console.log("Error:" + err); },
            () => {console.log("complete."); },
        );

        sub.next("d");
        sub.complete();
    }
}
