import * as _ from "lodash";

export class ArrayPoc {
    public test() {
        // this.chunkFun();
        // this.compactFun();
        // this.concatFun();
        // this.dropFun();
        this.fillFun();
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
        // this.zipFun();
    }

    // Creates an array of elements split into groups the length of size.
    // If array can't be split evenly, the final chunk will be the remaining elements.
    public chunkFun() {
        const original = ["a",  "b",  "c",  "d"];
        const target = _.chunk(original, 2);
        console.log(JSON.stringify(target));
        //  => [['a', 'b'], ['c', 'd']]
    }

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     */
    public compactFun() {
        const target = _.compact([0,  1,  false,  2,  "",  3]);
        console.log(JSON.stringify(target));
        // => [1,2,3]
    }

    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     */
    public concatFun() {
        const array =  [1];
        // const other =  _.concat(array,  2,  [3],  [[4]]);
        const other =  _.concat(array,  2,  [3],  [4]);
        console.log(JSON.stringify(other));
        // => [1,2,3,4]
        console.log(JSON.stringify(array));
        // => [1]
    }

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     */
    public dropFun() {
        const array = _.drop([1,  2,  3],  2);
        console.log(JSON.stringify(array));
        // => [3]

        const array1 = _.dropRight([1,  2,  3],  2);
        console.log(JSON.stringify(array1));
        // => [1]

        const users =  [
              { user:  "barney",   active:  true },
              { user:  "fred",     active:  false },
              { user:  "pebbles",  active:  false }];

        const v1 = _.dropRightWhile(users,  (o) => !o.active);
        console.log(JSON.stringify(v1));
        // => [{"user":"barney","active":true}]

        const v2 = _.dropWhile(users,  (o) => !o.active);
        console.log(JSON.stringify(v2));
        // => [{"user":"barney","active":true},{"user":"fred","active":false},{"user":"pebbles","active":false}]
    }

    /**
     * Fills elements of array with value from start up to, but not including, end.
     */
    public fillFun() {
        const array =  [1,  2,  3];
        _.fill(array,  "a");
        console.log(JSON.stringify(array));

        const a2 = _.fill(Array(3),  2);
        console.log(JSON.stringify(a2));

        const a3 = _.fill([4,  6,  8,  10],  "*",  1,  3);
        console.log(JSON.stringify(a3));
    }

    /**
     * Flattens array a single level deep.
     */
    public flattenFun() {
        const array = [1,  [2,  [3,  [4]],  5]];
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
    public findIndexFun() {
        const users =  [
              { user:  "barney",   active:  false },
              { user:  "fred",     active:  false },
              { user:  "pebbles",  active:  true },
            ];

        const i1 = _.findIndex(users,  (o) => o.user === "barney");
        console.log(i1);

        const i2 = _.findIndex(users,  { user:  "fred",  active:  false });
        console.log(i2);

        const i3 = _.findIndex(users,  ["active",  false]);
        console.log(i3);

        const i4 = _.findIndex(users,  "active");
        console.log(i4);

        const i5 = _.findLastIndex(users,  (o) => o.user === "barney");
        console.log(i5);

        const i6 = _.findLastIndex(users,  { user:  "fred",  active:  false });
        console.log(i6);

        const i7 = _.findLastIndex(users,  ["active",  false]);
        console.log(i7);

        const i8 = _.findLastIndex(users,  "active");
        console.log(i8);
    }

    /**
     * returns an object composed from key-value pairs.
     */
    public fromPairsFun() {
        const a1 = _.fromPairs([["a",  1],  ["b",  2]]);
        console.log(a1);

        const a2 = _.head([1,  2,  3]);
        console.log(a2);

        const a3 = _.indexOf([1, 2, 1, 2], 2);
        console.log(a3);

        const a4 = _.indexOf([1, 2, 1, 2], 2, 2);
        console.log(a4);
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     *  using SameValueZero for equality comparisons.
     * The order and references of result values are determined by the first array.
     */
    public insertsectionFun() {
        const a1 = _.intersection([2,  1],  [2,  3]);
        console.log(a1);

        const a2 = _.intersectionBy([2.1,  1.2],  [2.3,  3.4],  Math.floor);
        console.log(a2);

        const a3 = _.intersectionBy([{ x:  1 }],  [{ x:  2 },  { x:  1 }],  "x");
        console.log(a3);

        const objects =  [{ x:  1,  y:  2 },  { x:  2,  y:  1 }];
        const others =  [{ x:  1,  y:  1 },  { x:  1,  y:  2 }];
        const a4 = _.intersectionWith(objects,  others,  _.isEqual);
        console.log(a4);
    }

    /**
     * Converts all elements in array into a string separated by separator.
     */
    public joinFun() {
        const a1 = _.join(["a",  "b",  "c"],  "~");
        console.log(a1);

        const a2 = _.initial([1,  2,  3]);
        console.log(a2);

        const a3 = _.last([1,  2,  3]);
        console.log(a3);

        const a4 = _.lastIndexOf([1,  2,  1,  2],  2);
        console.log(a4);

        const a5 = _.lastIndexOf([1,  2,  1,  2],  2,  2);
        console.log(a5);
    }

    /**
     * Removes all given values from array using SameValueZero for equality comparisons.
     */
    public pullFun() {
        const array =  ["a",  "b",  "c",  "a",  "b",  "c"];
        const a1 = _.pull(array,  "a",  "c");
        console.log(a1);

        const a2 = _.pullAll(array,  ["a",  "c"]);
        console.log(a2);

        const array2 =  [{ x:  1 },  { x:  2 },  { x:  3 },  { x:  1 }];
        const a3 = _.pullAllBy(array2,  [{ x:  1 },  { x:  3 }],  "x");
        console.log(a3);

        const array3 =  [{ x:  1,  y:  2 },  { x:  3,  y:  4 },  { x:  5,  y:  6 }];
        const a4 = _.pullAllWith(array3,  [{ x:  3,  y:  4 }],  _.isEqual);
        console.log(a4);

        const array4 =  ["a",  "b",  "c",  "d"];
        const pulled =  _.pullAt(array4,  [1,  3]);
        console.log(pulled);

        const array5 =  ["a",  "b",  "c",  "d"];
        const a5 = _.nth(array5,  1);
        console.log(a5);
    }

    /**
     * removeFun
     */
    public removeFun() {
        const  array  = [1, 2, 3, 4];
        const  evens  = _.remove(array, (n) =>  {
              return  n  %  2  ===  0;
        });
        console.log(array);

        console.log(evens);

        const reverseArr = _.reverse(array);
        console.log(reverseArr);

        const slicedArr = _.slice(array, 0, 1);
        console.log(slicedArr);
    }

    /**
     * sortedIndex
     */
    public sortedIndexFun() {
        const v1 = _.sortedIndex([30, 50], 40);
        console.log(v1);

        const objects =  [{ x:  4 },  { x:  5 }];
        const v2 = _.sortedIndexBy(objects , {x: 4}, (o) => o.x);
        console.log(v2);

        const v3 = _.sortedIndexOf([4,  5,  5,  5,  6],  5);
        console.log(v3);

        const v4 = _.sortedLastIndex([4,  5,  5,  5,  6],  5);
        console.log(v4);

        const v5 = _.sortedLastIndexBy(objects , {x: 4}, (o) => o.x);
        console.log(v5);

        const v6 = _.sortedLastIndexOf([4,  5,  5,  5,  6],  5);
        console.log(v6);

        const v7 = _.sortedUniq([1,  1,  2]);
        console.log(v7);

        const v8 = _.sortedUniqBy([1.1,  1.2,  2.3,  2.4],  Math.floor);
        console.log(v8);
    }

    /**
     * takeFun
     */
    public takeFun() {
        const v1 = _.tail([1,  2,  3]);
        console.log(v1);

        const v2 = _.take([1, 2, 3], 2);
        console.log(v2);

        const v3 = _.takeRight([1, 2, 3], 2);
        console.log(v3);

        const users =  [
              { user:  "barney",   active:  true },
              { user:  "fred",     active:  false },
              { user:  "pebbles",  active:  false },
            ];
        const v4 = _.takeRightWhile(users, (o) => !o.active);
        console.log(v4);

        const v5 = _.takeWhile(users, (o) => !o.active);
        console.log(v5);
    }

    /**
     * unionFun
     */
    public unionFun() {
        const v1 = _.union([2], [1, 2]);
        console.log(v1);

        const v2 = _.unionBy([2.1], [1.2, 2.3], Math.floor);
        console.log(v2);

        const v3 = _.unionBy([{ x:  1 }],  [{ x:  2 },  { x:  1 }],  "x");
        console.log(v3);

        const objects =  [{ x:  1,  y:  2 },  { x:  2,  y:  1 }];
        const others =  [{ x:  1,  y:  1 },  { x:  1,  y:  2 }];
        const v4 = _.unionWith(objects, others, _.isEqual);
        console.log(v4);
    }

    /**
     * uniqFun
     */
    public uniqFun() {
        const v1 = _.uniq([2, 1, 2]);
        console.log(v1);

        const v2 = _.uniqBy([{  x: 1  }, {  x: 2  }, {  x: 1  }], "x");
        console.log(v2);

        const  objects  =  [{  x:  1,  y:  2  },  {  x:  2,  y:  1  },  {  x:  1,  y:  2  }];
        const v3 = _.uniqWith(objects,  _.isEqual);

        console.log(v3);
    }

    /**
     * unzipFun
     */
    public unzipFun() {
        const zipped =  _.zip(["a",  "b"],  [1,  2],  [true,  false]);
        const v1 = _.unzip(zipped);
        console.log(v1);

        const z2 = _.zip([1,  2],  [10,  20],  [100,  200]);
        const v2 = _.unzipWith(z2, _.add);
        console.log(v2);

        const v3 = _.without([2,  1,  2,  3],  1,  2);
        console.log(v3);
    }

    /**
     * zipFun
     */
    public zipFun() {
        const v1 = _.zipObject(["a", "b"], [1, 2]);
        console.log(v1);

        const v2 = _.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]);
        console.log(v2);

        const v3 = _.zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => {
            return a + b + c;
          });
        console.log(v3);
    }
}
