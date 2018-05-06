"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const Promise = require("promise");
class FromPoc {
    test() {
        // this.func1();
        // this.func2();
        // this.func3();
        this.func4();
    }
    func1() {
        // emit array as a sequence of values
        const arraySource = rxjs_1.Observable.from([1, 2, 3, 4, 5]);
        // output: 1,2,3,4,5
        const subscribe = arraySource.subscribe((val) => console.log(val));
    }
    func2() {
        // emit result of promise
        const promiseSource = rxjs_1.Observable.from(new Promise((resolve) => resolve("Hello World!")));
        // output: 'Hello World'
        const subscribe = promiseSource.subscribe((val) => console.log(val));
    }
    func3() {
        // emit string as a sequence
        const source = rxjs_1.Observable.from("Hello World");
        // output: 'H','e','l','l','o',' ','W','o','r','l','d'
        const subscribe = source.subscribe((val) => console.log(val));
    }
    func4() {
        const map = { length: 0 };
        map[0] = "Hi";
        map[1] = "Bye";
        map.length = 2;
        const mapSource = rxjs_1.Observable.from(map);
        // output: [1, 'Hi'], [2, 'Bye']
        const subscribe = mapSource.subscribe((val) => console.log(val));
    }
}
exports.FromPoc = FromPoc;
//# sourceMappingURL=RxjsFrom.js.map