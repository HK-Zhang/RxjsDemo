export class ArrayOps {
    public test() {
        // this.slicePoc();
        this.splicePoc();
        console.log("Done");
    }

    public splicePoc() {
        const arr = new Array(6);
        arr[0] = "George";
        arr[1] = "John";
        arr[2] = "Thomas";
        arr[3] = "James";
        arr[4] = "Adrew";
        arr[5] = "Martin";

        arr.splice(2, 0, "William");
        console.log(JSON.stringify(arr));
        // => ["George","John","William","Thomas","James","Adrew","Martin"]

        arr.splice(2, 1, "Jimmy");
        console.log(JSON.stringify(arr));
        // => ["George","John","Jimmy","Thomas","James","Adrew","Martin"]

        arr.splice(2, 3, "Henry");
        console.log(JSON.stringify(arr));
        // => ["George","John","Henry","Adrew","Martin"]
    }

    public slicePoc() {
        const arr = new Array(6);
        arr[0] = "George";
        arr[1] = "John";
        arr[2] = "Thomas";
        arr[3] = "James";
        arr[4] = "Adrew";
        arr[5] = "Martin";

        // Use 1: Simple copy
        const arr2 = arr.slice();
        console.log(JSON.stringify(arr2));
        // => ["George","John","Thomas","James","Adrew","Martin"]

        // Use 2: Subarray starting at N
        const arr3 = arr.slice(1);
        console.log(JSON.stringify(arr3));
        // => ["John","Thomas","James","Adrew","Martin"]

        // Use 3: last N of an array
        const arr4 = arr.slice(-3);
        console.log(JSON.stringify(arr4));
        // => ["James","Adrew","Martin"]

        // Use 4: first n of an array
        const first4 = arr.slice(0, 4);
        console.log(JSON.stringify(first4));
        // => ["George","John","Thomas","James"]

        // Use 5: inner segment of n, starting at m
        const inner2 = arr.slice(2, 3);
        console.log(JSON.stringify(inner2));
        // => ["Thomas"]

        // Use 6: Convert array-like objects into arrays
        function addOne(...restOfName) {
            return Array.prototype.slice.call(arguments).map((i) => i + 1);
        }
        const arr6 = addOne(1, 2, 3);
        console.log(JSON.stringify(arr6));
        // => [2,3,4]

        // Use 7: Coerce arbitrary length extra arguments into an array
        function myFunc(a, b, ...restOfName) {
            return Array.prototype.slice.call(arguments, 2);
        }
        const arr7 = myFunc(1, 2, 3, 4, 5, 6, 7, 8);
        console.log(JSON.stringify(arr7));
        // => [3,4,5,6,7,8]

        // Use 8: modifying a particular index in an array
        function replaceIdx(arry, index, newVal) {
            return [
                ...arry.slice(0, index),
                newVal,
                ...arry.slice(index + 1),
            ];
        }

        console.log(JSON.stringify(arr));
        // => ["George","John","Thomas","James","Adrew","Martin"]

    }
}
