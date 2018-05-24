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
    func2() {
        // 1. 取得 List 长度
        const arr1 = immutable_1.List([1, 2, 3]);
        arr1.size;
        // => 3
        // 2. 新增或取代 List 元素内容
        // set(index: number, value: T)
        // 将 index 位置的元素替换
        const arr2 = arr1.set(-1, 7);
        // => [1, 2, 7]
        const arr3 = arr1.set(4, 0);
        // => [1, 2, 3, undefined, 0]
        // 3. 删除 List 元素
        // delete(index: number)
        // 删除 index 位置的元素
        const arr4 = arr1.delete(1);
        // => [1, 3]
        // 4. 插入元素到 List
        // insert(index: number, value: T)
        // 在 index 位置插入 value
        const arr5 = arr1.insert(1, 2);
        // => [1, 2, 2, 3]
        // 5. 清空 List
        // clear()
        const arr6 = arr1.clear();
        // => []
    }
}
exports.listPoc = listPoc;
//# sourceMappingURL=listPoc.js.map