import { Map, List } from 'immutable'

export class mapImPoc {
    test() {
        this.func1();
    }

    func1() {
        const mapOne = Map().set(List([1]), 'listofone');
        console.log(mapOne.get(List([1])));
    }

    func2() {

        // 1. Map 大小
        const map1 = Map({ a: 1 });
        map1.size
        // => 1

        // 2. 新增或取代 Map 元素
        // set(key: K, value: V)
        const map2 = map1.set('a', 7);
        // => Map { "a": 7 }

        // 3. 删除元素
        // delete(key: K)
        const map3 = map1.delete('a');
        // => Map {}

        // 4. 清除 Map 内容
        const map4 = map1.clear();
        // => Map {}

        // 5. 更新 Map 元素
        // update(updater: (value: Map<K, V>) => Map<K, V>)
        // update(key: K, updater: (value: V) => V)
        // update(key: K, notSetValue: V, updater: (value: V) => V)
        const map5 = map1.update('a', () => (7))
        // => Map { "a": 7 }

        // 6. 合併 Map 
        const map6 = Map({ b: 3 });
        map1.merge(map6);
        // => Map { "a": 1, "b": 3 }

    }

}