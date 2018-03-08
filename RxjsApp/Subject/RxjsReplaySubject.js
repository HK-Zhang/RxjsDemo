"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReplaySubject_1 = require("rxjs/ReplaySubject");
class ReplaySubjectPoc {
    test() {
        this.func1();
    }
    func1() {
        const sub = new ReplaySubject_1.ReplaySubject(2);
        sub.next("a");
        sub.next("b");
        sub.next("c");
        const subscription = sub.subscribe((t) => { console.log("Next:" + t); }, (err) => { console.log("Error:" + err); }, () => { console.log("complete."); });
        sub.next("d");
        sub.complete();
    }
}
exports.ReplaySubjectPoc = ReplaySubjectPoc;
//# sourceMappingURL=RxjsReplaySubject.js.map