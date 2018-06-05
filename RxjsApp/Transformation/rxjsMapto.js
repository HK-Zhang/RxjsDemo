"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class MaptoPoc {
    test() {
        this.func1();
    }
    func1() {
        // emit value every two seconds
        const source = rxjs_1.interval(2000);
        // map all emissions to one value
        const example = source.pipe(operators_1.mapTo("HELLO WORLD!"));
        // output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
        const subscribe = example.subscribe((val) => console.log(val));
    }
    func2() {
        //// emit every click on document
        // const source = Observable.fromEvent(document, 'click');
        //// map all emissions to one value
        // const example = source.mapTo('GOODBYE WORLD!');
        //// output: (click)'GOODBYE WORLD!'...
        // const subscribe = example.subscribe(val => console.log(val));
    }
}
exports.MaptoPoc = MaptoPoc;
//# sourceMappingURL=rxjsMapto.js.map