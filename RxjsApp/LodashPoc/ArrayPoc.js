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
        // this.fromPairsFun();
        // this.insertsectionFun();
        // this.joinFun();
        // this.pullFun();
        // this.removeFun();
        // this.sortedIndexFun();
        // this.takeFun();
        // this.unionFun();
        // this.uniqFun();
        // this.unzipFun();
        this.zipFun();
    }
    // Creates an array of elements split into groups the length of size.
    // If array can't be split evenly, the final chunk will be the remaining elements.
    chunkFun() {
        const original = ["a", "b", "c", "d"];
        const target = _.chunk(original, 2);
        console.log(JSON.stringify(target));
        //  => [['a', 'b'], ['c', 'd']]
    }
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     */
    compactFun() {
        const target = _.compact([0, 1, false, 2, "", 3]);
        console.log(JSON.stringify(target));
        // => [1,2,3]
    }
    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     */
    concatFun() {
        const array = [1];
        // const other =  _.concat(array,  2,  [3],  [[4]]);
        const other = _.concat(array, 2, [3], [4]);
        console.log(JSON.stringify(other));
        // => [1,2,3,4]
        console.log(JSON.stringify(array));
        // => [1]
    }
    /**
     * Creates a slice of array with n elements dropped from the beginning.
     */
    dropFun() {
        const array = _.drop([1, 2, 3], 2);
        console.log(JSON.stringify(array));
        // => [3]
        const array1 = _.dropRight([1, 2, 3], 2);
        console.log(JSON.stringify(array1));
        // => [1]
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false },
            { user: "pebbles", active: false }
        ];
        const v1 = _.dropRightWhile(users, (o) => !o.active);
        console.log(JSON.stringify(v1));
        // => [{"user":"barney","active":true}]
        const v2 = _.dropWhile(users, (o) => !o.active);
        console.log(JSON.stringify(v2));
        // => [{"user":"barney","active":true},{"user":"fred","active":false},{"user":"pebbles","active":false}]
    }
    /**
     * Fills elements of array with value from start up to, but not including, end.
     */
    fillFun() {
        const array = [1, 2, 3];
        _.fill(array, "a");
        console.log(JSON.stringify(array));
        // => ["a","a","a"]
        const a2 = _.fill(Array(3), 2);
        console.log(JSON.stringify(a2));
        // => [2,2,2]
        const a3 = _.fill([4, 6, 8, 10], "*", 1, 3);
        console.log(JSON.stringify(a3));
        // => [4,"*","*",10]
    }
    /**
     * Flattens array a single level deep.
     */
    flattenFun() {
        const array = [1, [2, [3, [4]], 5]];
        const a1 = _.flatten(array);
        console.log(JSON.stringify(a1));
        // => [1,2,[3,[4]],5]
        const a2 = _.flattenDeep(array);
        console.log(JSON.stringify(a2));
        // => [1,2,3,4,5]
        const a3 = _.flattenDepth(array, 1);
        console.log(JSON.stringify(a3));
        // => [1,2,[3,[4]],5]
        const a4 = _.flattenDepth(array, 2);
        console.log(JSON.stringify(a4));
        // => [1,2,3,[4],5]
        const a5 = _.flattenDepth(array, 3);
        console.log(JSON.stringify(a5));
        // => [1,2,3,4,5]
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
        // => 0
        const i2 = _.findIndex(users, { user: "fred", active: false });
        console.log(i2);
        // => 1
        const i3 = _.findIndex(users, ["active", false]);
        console.log(i3);
        // => 0
        const i4 = _.findIndex(users, "active");
        console.log(i4);
        // => 2
        const i5 = _.findLastIndex(users, (o) => o.user === "barney");
        console.log(i5);
        // => 0
        const i6 = _.findLastIndex(users, { user: "fred", active: false });
        console.log(i6);
        // => 1
        const i7 = _.findLastIndex(users, ["active", false]);
        console.log(i7);
        // => 1
        const i8 = _.findLastIndex(users, "active");
        console.log(i8);
        // => 2
    }
    /**
     * returns an object composed from key-value pairs.
     */
    fromPairsFun() {
        const a1 = _.fromPairs([["a", 1], ["b", 2]]);
        console.log(JSON.stringify(a1));
        // => {"a":1,"b":2}
        const a2 = _.head([1, 2, 3]);
        console.log(JSON.stringify(a2));
        // => 1
        const a3 = _.indexOf([1, 2, 1, 2], 2);
        console.log(JSON.stringify(a3));
        // => 1
        const a4 = _.indexOf([1, 2, 1, 2], 2, 2);
        console.log(JSON.stringify(a4));
        // => 3
    }
    /**
     * Creates an array of unique values that are included in all given arrays
     *  using SameValueZero for equality comparisons.
     * The order and references of result values are determined by the first array.
     */
    insertsectionFun() {
        const a1 = _.intersection([2, 1], [2, 3]);
        console.log(JSON.stringify(a1));
        // => [2]
        const a2 = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
        console.log(JSON.stringify(a2));
        // => [2.1]
        const a3 = _.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
        console.log(JSON.stringify(a3));
        // => [{"x":1}]
        const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
        const a4 = _.intersectionWith(objects, others, _.isEqual);
        console.log(JSON.stringify(a4));
        // => [{"x":1,"y":2}]
    }
    /**
     * Converts all elements in array into a string separated by separator.
     */
    joinFun() {
        const a1 = _.join(["a", "b", "c"], "~");
        console.log(a1);
        // => a~b~c
        const a2 = _.initial([1, 2, 3]);
        console.log(a2);
        // => [1, 2]
        const a3 = _.last([1, 2, 3]);
        console.log(a3);
        // => 3
        const a4 = _.lastIndexOf([1, 2, 1, 2], 2);
        console.log(a4);
        // => 3
        const a5 = _.lastIndexOf([1, 2, 1, 2], 2, 2);
        console.log(a5);
        // => 1
    }
    /**
     * Removes all given values from array using SameValueZero for equality comparisons.
     */
    pullFun() {
        const array = ["a", "b", "c", "a", "b", "c"];
        const a1 = _.pull(array, "a", "c");
        console.log(JSON.stringify(a1));
        // => ["b","b"]
        const a2 = _.pullAll(array, ["a", "c"]);
        console.log(JSON.stringify(a2));
        // => ["b","b"]
        const array2 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
        const a3 = _.pullAllBy(array2, [{ x: 1 }, { x: 3 }], "x");
        console.log(JSON.stringify(a3));
        // => [{"x":2}]
        const array3 = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }];
        const a4 = _.pullAllWith(array3, [{ x: 3, y: 4 }], _.isEqual);
        console.log(JSON.stringify(a4));
        // => [{"x":1,"y":2},{"x":5,"y":6}]
        const array4 = ["a", "b", "c", "d"];
        const pulled = _.pullAt(array4, [1, 3]);
        console.log(JSON.stringify(pulled));
        // => ["b","d"]
        const array5 = ["a", "b", "c", "d"];
        const a5 = _.nth(array5, 1);
        console.log(JSON.stringify(a5));
        // => "b"
    }
    /**
     * removeFun
     */
    removeFun() {
        const array = [1, 2, 3, 4];
        const evens = _.remove(array, (n) => {
            return n % 2 === 0;
        });
        console.log(JSON.stringify(array));
        // => [1,3]
        console.log(JSON.stringify(evens));
        // => [2,4]
        const reverseArr = _.reverse(array);
        console.log(JSON.stringify(reverseArr));
        // => [3,1]
        const slicedArr = _.slice(array, 0, 1);
        console.log(JSON.stringify(slicedArr));
        // => [3]
    }
    /**
     * sortedIndex
     */
    sortedIndexFun() {
        const v1 = _.sortedIndex([30, 50], 40);
        console.log(v1);
        // => 1
        const objects = [{ x: 4 }, { x: 5 }];
        const v2 = _.sortedIndexBy(objects, { x: 4 }, (o) => o.x);
        console.log(v2);
        // => 0
        const v3 = _.sortedIndexOf([4, 5, 5, 5, 6], 5);
        console.log(v3);
        // => 1
        const v4 = _.sortedLastIndex([4, 5, 5, 5, 6], 5);
        console.log(v4);
        // => 4
        const v5 = _.sortedLastIndexBy(objects, { x: 4 }, (o) => o.x);
        console.log(v5);
        // => 1
        const v6 = _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
        console.log(v6);
        // => 3
        const v7 = _.sortedUniq([1, 1, 2]);
        console.log(JSON.stringify(v7));
        // => [1,2]
        const v8 = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
        console.log(JSON.stringify(v8));
        // => [1.1,2.3]
    }
    /**
     * takeFun
     */
    takeFun() {
        const v1 = _.tail([1, 2, 3]);
        console.log(JSON.stringify(v1));
        // => [2,3]
        const v2 = _.take([1, 2, 3], 2);
        console.log(JSON.stringify(v2));
        // => [1,2]
        const v3 = _.takeRight([1, 2, 3], 2);
        console.log(JSON.stringify(v3));
        // => [2,3]
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false },
            { user: "pebbles", active: false },
        ];
        const v4 = _.takeRightWhile(users, (o) => !o.active);
        console.log(JSON.stringify(v4));
        // => [{"user":"fred","active":false},{"user":"pebbles","active":false}]
        const v5 = _.takeWhile(users, (o) => !o.active);
        console.log(JSON.stringify(v5));
        // => []
    }
    /**
     * unionFun
     */
    unionFun() {
        const v1 = _.union([2], [1, 2]);
        console.log(JSON.stringify(v1));
        // => [2,1]
        const v2 = _.unionBy([2.1], [1.2, 2.3], Math.floor);
        console.log(JSON.stringify(v2));
        // => [2.1,1.2]
        const v3 = _.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
        console.log(JSON.stringify(v3));
        // => [{"x":1},{"x":2}]
        const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
        const v4 = _.unionWith(objects, others, _.isEqual);
        console.log(JSON.stringify(v4));
        // => [{"x":1,"y":2},{"x":2,"y":1},{"x":1,"y":1}]
    }
    /**
     * uniqFun
     */
    uniqFun() {
        const v1 = _.uniq([2, 1, 2]);
        console.log(JSON.stringify(v1));
        // => [2,1]
        const v2 = _.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x");
        console.log(JSON.stringify(v2));
        // => [{"x":1},{"x":2}]
        const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 2 }];
        const v3 = _.uniqWith(objects, _.isEqual);
        console.log(JSON.stringify(v3));
        // => [{"x":1,"y":2},{"x":2,"y":1}]
    }
    /**
     * unzipFun
     */
    unzipFun() {
        const zipped = _.zip(["a", "b"], [1, 2], [true, false]);
        console.log(JSON.stringify(zipped));
        // => [["a",1,true],["b",2,false]]
        const v1 = _.unzip(zipped);
        console.log(JSON.stringify(v1));
        // => [["a","b"],[1,2],[true,false]]
        const z2 = _.zip([1, 2], [10, 20], [100, 200]);
        console.log(JSON.stringify(z2));
        // => [[1,10,100],[2,20,200]]
        const v2 = _.unzipWith(z2, _.add);
        console.log(JSON.stringify(v2));
        // => [3,30,300]
        const v3 = _.without([2, 1, 2, 3], 1, 2);
        console.log(JSON.stringify(v3));
        // => [3]
    }
    /**
     * zipFun
     */
    zipFun() {
        const v1 = _.zipObject(["a", "b"], [1, 2]);
        console.log(JSON.stringify(v1));
        // => {"a":1,"b":2}
        const v2 = _.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]);
        console.log(JSON.stringify(v2));
        // => {"a":{"b":[{"c":1},{"d":2}]}}
        const v3 = _.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => {
            return a + b + c;
        });
        console.log(JSON.stringify(v3));
        // => [111,222]
    }
}
exports.ArrayPoc = ArrayPoc;
//# sourceMappingURL=ArrayPoc.js.map