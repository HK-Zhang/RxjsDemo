"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class ArrayPoc {
    test() {
        // this.chunkFun();
        // this.compactFun();
        // this.concatFun();
        this.dropFun();
    }
    // tslint:disable-next-line:max-line-length
    // Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
    chunkFun() {
        const original = ["a", "b", "c", "d"];
        const target = _.chunk(original, 2);
        _.forEach(target, (val) => console.log(val));
    }
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     */
    compactFun() {
        const target = _.compact([0, 1, false, 2, "", 3]);
        _.forEach(target, (val) => console.log(val));
    }
    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     */
    concatFun() {
        const array = [1];
        // const other =  _.concat(array,  2,  [3],  [[4]]);
        const other = _.concat(array, 2, [3], [4]);
        console.log(other);
        console.log(array);
    }
    /**
     * Creates a slice of array with n elements dropped from the beginning.
     */
    dropFun() {
        const array = _.drop([1, 2, 3], 2);
        console.log(array);
        const array1 = _.dropRight([1, 2, 3], 2);
        console.log(array1);
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false },
            { user: "pebbles", active: false }
        ];
        const v1 = _.dropRightWhile(users, (o) => !o.active);
        console.log(v1);
        const v2 = _.dropWhile(users, (o) => !o.active);
        console.log(v2);
    }
}
exports.ArrayPoc = ArrayPoc;
//# sourceMappingURL=ArrayPoc.js.map