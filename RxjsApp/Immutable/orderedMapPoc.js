"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class orderedMapImPoc {
    test() {
        this.func1();
    }
    func1() {
        const one = immutable_1.OrderedMap({ a: 10, b: 20, c: 30 });
        const two = immutable_1.OrderedMap({ b: 40, a: 50, d: 60 });
        const newone = one.merge(two); // OrderedMap { "a": 50, "b": 40, "c": 30, "d": 60 }
        const newtwo = two.merge(one); // OrderedMap { "b": 20, "a": 10, "d": 60, "c": 30 }
        console.log("one:");
        one.forEach(t => console.log(t.valueOf()));
        console.log("two:");
        two.forEach(t => console.log(t.valueOf()));
        console.log("newone:");
        newone.forEach(t => console.log(t.valueOf()));
        console.log("newtwo:");
        newtwo.forEach(t => console.log(t.valueOf()));
    }
}
exports.orderedMapImPoc = orderedMapImPoc;
//# sourceMappingURL=orderedMapPoc.js.map