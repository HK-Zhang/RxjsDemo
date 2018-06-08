import { fromJS, Range } from "immutable";


export class FromJsImPoc {
    public test() {
        // this.func1();
        this.func3();
    }

    public func1() {

        const $obj = fromJS({
            a: 1,
        });

        console.log($obj.get("a"));

        const obj = {
            count: 1,
            list: [1, 2, 3, 4, 5],
        };
        const map1 = fromJS(obj);
        const map2 = map1.set("count", 4);
        console.log(map1.list === map2.list);
    }

    public func2() {
        const obj = {
            count: 1,
            list: [1, 2, 3, 4, 5],
        };
        const map1 = fromJS(obj);
        const map2 = map1.set("count", 4);

        console.log(map1.list === map2.list); // true
    }

    public func3() {
        Range(1, Infinity)
            .map((n) => -n)
            .take(2)
            .reduce((r, n) => r + n, 0);
    }

}
