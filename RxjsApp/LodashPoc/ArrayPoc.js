"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class ArrayPoc {
    test() {
        // this.chunkFun();
        // this.compactFun();
        // this.concatFun();
        // this.dropFun();
        // this.fillFun();
        // this.findIndexFun();
        // this.flattenFun();
        this.fromPairsFun();
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
    /**
     * Fills elements of array with value from start up to, but not including, end.
     */
    fillFun() {
        const array = [1, 2, 3];
        _.fill(array, "a");
        console.log(array);
        const a2 = _.fill(Array(3), 2);
        console.log(a2);
        const a3 = _.fill([4, 6, 8, 10], "*", 1, 3);
        console.log(a3);
    }
    /**
     * Flattens array a single level deep.
     */
    flattenFun() {
        const array = [1, [2, [3, [4]], 5]];
        const a1 = _.flatten(array);
        console.log(a1);
        const a2 = _.flattenDeep(array);
        console.log(a2);
        const a3 = _.flattenDepth(array, 1);
        console.log(a3);
        const a4 = _.flattenDepth(array, 2);
        console.log(a4);
        const a5 = _.flattenDepth(array, 3);
        console.log(a5);
    }
    /**
     * This method is like _.find except that it returns the index of the first element
     * predicate returns truthy for instead of the element itself.
     */
    findIndexFun() {
        const users = [
            { user: "barney", active: false },
            { user: "fred", active: false },
            { user: "pebbles", active: true },
        ];
        const i1 = _.findIndex(users, (o) => o.user === "barney");
        console.log(i1);
        const i2 = _.findIndex(users, { user: "fred", active: false });
        console.log(i2);
        const i3 = _.findIndex(users, ["active", false]);
        console.log(i3);
        const i4 = _.findIndex(users, "active");
        console.log(i4);
        const i5 = _.findLastIndex(users, (o) => o.user === "barney");
        console.log(i5);
        const i6 = _.findLastIndex(users, { user: "fred", active: false });
        console.log(i6);
        const i7 = _.findLastIndex(users, ["active", false]);
        console.log(i7);
        const i8 = _.findLastIndex(users, "active");
        console.log(i8);
    }
    /**
     * returns an object composed from key-value pairs.
     */
    fromPairsFun() {
        const a1 = _.fromPairs([["a", 1], ["b", 2]]);
        console.log(a1);
        const a2 = _.head([1, 2, 3]);
        console.log(a2);
        const a3 = _.indexOf([1, 2, 1, 2], 2);
        console.log(a3);
        const a4 = _.indexOf([1, 2, 1, 2], 2, 2);
        console.log(a4);
    }
}
exports.ArrayPoc = ArrayPoc;
//# sourceMappingURL=ArrayPoc.js.map