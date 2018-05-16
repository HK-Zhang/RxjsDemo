"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class AsyncSubjectPoc {
    test() {
        this.func1();
    }
    func1() {
        const sub = new rxjs_1.AsyncSubject();
        let i = 0;
        const handle = setInterval(() => {
            sub.next(i);
            if (++i > 3) {
                sub.complete();
                clearInterval(handle);
            }
        }, 500);
        const subscription = sub.subscribe((t) => { console.log("Next:" + t); }, (err) => { console.log("Error:" + err); }, () => { console.log("complete."); });
    }
}
exports.AsyncSubjectPoc = AsyncSubjectPoc;
//# sourceMappingURL=RxjsAsyncSubject.js.map