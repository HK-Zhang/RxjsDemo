"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
class BehaviorSubjectPoc {
    test() {
        // this.func1();
        this.func2();
    }
    func2() {
        const sub = new BehaviorSubject_1.BehaviorSubject(1);
        const subscription = sub.subscribe((t) => {
            console.log(t);
        });
        sub.next(2);
        sub.complete();
    }
    /**
     * func1
     */
    func1() {
        const sub = new BehaviorSubject_1.BehaviorSubject(42);
        const subscription = sub.subscribe((t) => { console.log("Next:" + t); }, (err) => { console.log("Error:" + err); }, () => { console.log("complete."); });
        sub.next(56);
        sub.complete();
    }
}
exports.BehaviorSubjectPoc = BehaviorSubjectPoc;
//# sourceMappingURL=BehaviorSubject.js.map