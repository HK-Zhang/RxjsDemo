"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class IIFPoc {
    test() {
        // this.func1();
    }
    func1() {
        const shouldRun = true;
        const source$ = rxjs_1.iif(() => shouldRun, rxjs_1.of(42), rxjs_1.of(56));
        const subscription = source$.subscribe((x) => console.log("Next: " + x), (err) => console.log("Error: " + err), () => console.log("Completed"));
    }
}
exports.IIFPoc = IIFPoc;
//# sourceMappingURL=rxjsiif.js.map