import * as _ from "lodash";

export class ArrayPoc {
    public test() {
        this.func1();
    }

    public func1() {
        const original = ["a",  "b",  "c",  "d"];
        const target = _.chunk(original, 2);
        _.forEach(target, (val) => console.log(val));
    }
}
