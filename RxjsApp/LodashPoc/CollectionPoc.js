"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class CollectionPoc {
    test() {
        // this.countFunc();
        // this.findFunc();
        // this.flapFunc();
        // this.groupbyFunc();
        this.invokeMapFunc();
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
    /**
     * groupbyFunc
     */
    groupbyFunc() {
        const v1 = _.groupBy([6.1, 4.2, 6.3], Math.floor);
        console.log(v1);
        const v2 = _.groupBy(["one", "two", "three"], "length");
        console.log(v2);
        const v3 = _.includes([1, 2, 3], 1);
        console.log(v3);
        const v4 = _.includes([1, 2, 3], 1, 2);
        console.log(v4);
        const v5 = _.includes({ a: 1, b: 2 }, 1);
        console.log(v5);
        const v6 = _.includes("abcd", "bc");
        console.log(v6);
    }
    /**
     * invokeMapFunc
     */
    invokeMapFunc() {
        const v1 = _.invokeMap([[5, 1, 7], [3, 2, 1]], "sort");
        console.log(v1);
        const v2 = _.invokeMap([123, 456], String.prototype.split, "");
        console.log(v2);
        const array = [
            { dir: "left", code: 97 },
            { dir: "right", code: 100 },
        ];
        const v3 = _.keyBy(array, (o) => {
            return String.fromCharCode(o.code);
        });
        console.log(v3);
        const v4 = _.keyBy(array, "dir");
        console.log(v4);
        const v5 = _.map([4, 8], (n) => n * n);
        console.log(v5);
        const users = [
            { user: "barney" },
            { user: "fred" },
        ];
        const v6 = _.map(users, "user");
        console.log(v6);
    }
}
exports.CollectionPoc = CollectionPoc;
//# sourceMappingURL=CollectionPoc.js.map