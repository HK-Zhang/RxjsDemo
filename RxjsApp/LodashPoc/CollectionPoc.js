"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class CollectionPoc {
    test() {
        // this.countFunc();
        // this.findFunc();
        this.flapFunc();
    }
    countFunc() {
        const v1 = _.countBy([6.1, 4.2, 6.3], Math.floor);
        const v2 = _.countBy(["one", "two", "three"], "length");
        console.log(v1);
        console.log(v2);
        const v3 = _.every([true, 1, null, "yes"], Boolean);
        console.log(v3);
        const users = [
            { user: "barney", age: 36, active: false },
            { user: "fred", age: 40, active: false },
        ];
        const v4 = _.every(users, { user: "barney", active: false });
        console.log(v4);
        const v5 = _.every(users, ["active", false]);
        console.log(v5);
    }
    /**
     * filterFunc
     */
    filterFunc() {
        const users = [
            { user: "barney", age: 36, active: true },
            { user: "fred", age: 40, active: false },
        ];
        const v1 = _.filter(users, (o) => !o.active);
        console.log(v1);
        const v2 = _.filter(users, { age: 36, active: true });
        console.log(v2);
        const v3 = _.filter(users, ["active", false]);
        console.log(v3);
        const v4 = _.filter(users, "active");
        console.log(v4);
    }
    /**
     * findFunc
     */
    findFunc() {
        const users = [
            { user: "barney", age: 36, active: true },
            { user: "fred", age: 40, active: false },
            { user: "pebbles", age: 1, active: true },
        ];
        const v1 = _.find(users, (o) => o.age < 40);
        console.log(v1);
        const v2 = _.find(users, { age: 36, active: true });
        console.log(v2);
        const v3 = _.find(users, ["active", false]);
        console.log(v3);
        const v4 = _.find(users, "active");
        console.log(v4);
        const v5 = _.findLast([1, 2, 3, 4], (n) => n % 2 === 1);
        console.log(v5);
    }
    /**
     * flapFunc
     */
    flapFunc() {
        const v1 = _.flatMap([1, 2], (o) => [o, o]);
        console.log(v1);
        _.forEach([1, 2], (value) => console.log(value));
        _.forEach({ a: 1, b: 2 }, (value, key) => {
            console.log(key);
        });
        _.forEachRight([1, 2], (value) => console.log(value));
    }
}
exports.CollectionPoc = CollectionPoc;
//# sourceMappingURL=CollectionPoc.js.map