import { Set } from 'immutable'

export class setImPoc {
    test() {
        this.func1();
    }

    func1() {

        const s1 = Set(['a', 'b', 'c']);
        const s2 = s1.intersect(Set(['c', 'a', 't']));

        s1.forEach(t => console.log(t.valueOf()));
        s2.forEach(t => console.log(t.valueOf()));

        const s3 = s1.union(Set(['c', 'a', 't']));
        s3.forEach(t => console.log(t.valueOf()));

    }

    func2() {

        // 1. 建立 Set
        const set1 = Set([1, 2, 3]);
        // => Set { 1, 2, 3 }

        // 2. 新增元素
        const set2 = set1.add(1).add(5);
        // => Set { 1, 2, 3, 5 } 
        // 由于 Set 为不能重複集合，故 1 只能出现一次

        // 3. 删除元素
        const set3 = set1.delete(3);
        // => Set { 1, 2 }

        // 4. 取联集
        const set4 = Set([2, 3, 4, 5, 6]);
        set1.union(set4);
        // => Set { 1, 2, 3, 4, 5, 6 }

        // 5. 取交集
        set1.intersect(set4);
        // => Set { 2, 3 }

        // 6. 取差集
        set1.subtract(set4);
        // => Set { 1 }
    }

}