"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
class listPoc {
    test() {
        this.func1();
    }
    func1() {
        const emptyList = immutable_1.List();
        // List []
        const plainArray = [1, 2, 3, 4];
        const listFromPlainArray = immutable_1.List(plainArray);
        // List [ 1, 2, 3, 4 ]
        const plainSet = immutable_1.Set([1, 2, 3, 4]);
        const listFromPlainSet = immutable_1.List(plainSet);
        // List [ 1, 2, 3, 4 ]
        const arrayIterator = plainArray[Symbol.iterator]();
        const listFromCollectionArray = immutable_1.List(arrayIterator);
        const newArray = listFromCollectionArray.set(0, 2);
        listFromCollectionArray.forEach(t => console.log(t));
        newArray.forEach(t => console.log(t));
        // List [ 1, 2, 3, 4 ]
        console.log(listFromPlainArray.equals(listFromCollectionArray)); // true
        console.log(listFromPlainSet.equals(listFromCollectionArray)); // true
        console.log(listFromPlainSet.equals(listFromPlainArray)); // true
    }
}
exports.listPoc = listPoc;
//# sourceMappingURL=listPoc.js.map