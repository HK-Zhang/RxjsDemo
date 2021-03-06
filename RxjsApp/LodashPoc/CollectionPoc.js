"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class CollectionPoc {
    test() {
        // this.countFunc();
        // this.filterFunc();
        // this.findFunc();
        // this.flapFunc();
        // this.groupbyFunc();
        // this.invokeMapFunc();
        // this.orderbyFunc();
        // this.rejectFunc();
        this.sizeFunc();
    }
    countFunc() {
        const v1 = _.countBy([6.1, 4.2, 6.3], Math.floor);
        const v2 = _.countBy(["one", "two", "three"], "length");
        console.log(v1);
        // => {4: 1, 6: 2}
        console.log(v2);
        // => {3: 2, 5: 1}
        const v3 = _.every([true, 1, null, "yes"], Boolean);
        console.log(v3);
        // => false
        const users = [
            { user: "barney", age: 36, active: false },
            { user: "fred", age: 40, active: false },
        ];
        const v4 = _.every(users, { user: "barney", active: false });
        console.log(v4);
        // => false
        const v5 = _.every(users, ["active", false]);
        console.log(v5);
        // => true
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
        console.log(JSON.stringify(v1));
        // => [{"user":"fred","age":40,"active":false}]
        const v2 = _.filter(users, { age: 36, active: true });
        console.log(JSON.stringify(v2));
        // => [{"user":"barney","age":36,"active":true}]
        const v3 = _.filter(users, ["active", false]);
        console.log(JSON.stringify(v3));
        // => [{"user":"fred","age":40,"active":false}]
        const v4 = _.filter(users, "active");
        console.log(JSON.stringify(v4));
        // => [{"user":"barney","age":36,"active":true}]
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
        console.log(JSON.stringify(v1));
        // => {"user":"barney","age":36,"active":true}
        const v2 = _.find(users, { age: 36, active: true });
        console.log(JSON.stringify(v2));
        // => {"user":"barney","age":36,"active":true}
        const v3 = _.find(users, ["active", false]);
        console.log(JSON.stringify(v3));
        // => {"user":"fred","age":40,"active":false}
        const v4 = _.find(users, "active");
        console.log(JSON.stringify(v4));
        // => {"user":"barney","age":36,"active":true}
        const v5 = _.findLast([1, 2, 3, 4], (n) => n % 2 === 1);
        console.log(JSON.stringify(v5));
        // => 3
    }
    /**
     * flapFunc
     */
    flapFunc() {
        const v1 = _.flatMap([1, 2], (o) => [o, o]);
        console.log(JSON.stringify(v1));
        // => [1,1,2,2]
        _.forEach([1, 2], (value) => console.log(value));
        // => 1, 2
        _.forEach({ a: 1, b: 2 }, (value, key) => {
            console.log(key);
        });
        // => a, b
        _.forEachRight([1, 2], (value) => console.log(value));
        // => 2, 1
    }
    /**
     * groupbyFunc
     */
    groupbyFunc() {
        const v1 = _.groupBy([6.1, 4.2, 6.3], Math.floor);
        console.log(JSON.stringify(v1));
        // => {"4":[4.2],"6":[6.1,6.3]}
        const v2 = _.groupBy(["one", "two", "three"], "length");
        console.log(JSON.stringify(v2));
        // => {"3":["one","two"],"5":["three"]}
        const v3 = _.includes([1, 2, 3], 1);
        console.log(JSON.stringify(v3));
        // => true
        const v4 = _.includes([1, 2, 3], 1, 2);
        console.log(JSON.stringify(v4));
        // => false
        const v5 = _.includes({ a: 1, b: 2 }, 1);
        console.log(JSON.stringify(v5));
        // => true
        const v6 = _.includes("abcd", "bc");
        console.log(JSON.stringify(v6));
        // => true
    }
    /**
     * invokeMapFunc
     */
    invokeMapFunc() {
        const v1 = _.invokeMap([[5, 1, 7], [3, 2, 1]], "sort");
        console.log(JSON.stringify(v1));
        // => [[1,5,7],[1,2,3]]
        const v2 = _.invokeMap([123, 456], String.prototype.split, "");
        console.log(JSON.stringify(v2));
        // => [["1","2","3"],["4","5","6"]]
        const array = [
            { dir: "left", code: 97 },
            { dir: "right", code: 100 },
        ];
        const v3 = _.keyBy(array, (o) => {
            return String.fromCharCode(o.code);
        });
        console.log(JSON.stringify(v3));
        // => {"a":{"dir":"left","code":97},"d":{"dir":"right","code":100}}
        const v4 = _.keyBy(array, "dir");
        console.log(JSON.stringify(v4));
        // => {"left":{"dir":"left","code":97},"right":{"dir":"right","code":100}}
        const v5 = _.map([4, 8], (n) => n * n);
        console.log(JSON.stringify(v5));
        // => [16,64]
        const users = [
            { user: "barney" },
            { user: "fred" },
        ];
        const v6 = _.map(users, "user");
        console.log(JSON.stringify(v6));
        // => ["barney","fred"]
    }
    /**
     * orderbyFunc
     */
    orderbyFunc() {
        const users = [
            { user: "fred", age: 48 },
            { user: "barney", age: 34 },
            { user: "fred", age: 40 },
            { user: "barney", age: 36 },
        ];
        const v1 = _.orderBy(users, ["user", "age"], ["asc", "desc"]);
        console.log(JSON.stringify(v1));
        // => [{"user":"barney","age":36},{"user":"barney","age":34},{"user":"fred","age":48},{"user":"fred","age":40}]
        const urs = [
            { user: "barney", age: 36, active: false },
            { user: "fred", age: 40, active: true },
            { user: "pebbles", age: 1, active: false },
        ];
        const v2 = _.partition(urs, (o) => o.active);
        console.log(JSON.stringify(v2));
        // => [[{"user":"fred","age":40,"active":true}],[{"user":"barney","age":36,"active":false},
        // {"user":"pebbles","age":1,"active":false}]]
        const v3 = _.partition(urs, { age: 1, active: false });
        console.log(JSON.stringify(v3));
        // => [[{"user":"pebbles","age":1,"active":false}],
        // [{"user":"barney","age":36,"active":false},{"user":"fred","age":40,"active":true}]]
        const v4 = _.partition(urs, ["active", false]);
        console.log(JSON.stringify(v4));
        // => [[{"user":"barney","age":36,"active":false},{"user":"pebbles","age":1,"active":false}],
        // [{"user":"fred","age":40,"active":true}]]
        const v5 = _.partition(urs, "active");
        console.log(JSON.stringify(v5));
        // => [[{"user":"fred","age":40,"active":true}],
        // [{"user":"barney","age":36,"active":false},{"user":"pebbles","age":1,"active":false}]]
        const v6 = _.reduce([1, 2], (sum, n) => sum + n);
        console.log(JSON.stringify(v6));
        // => 3
        const v7 = _.reduce({ a: 1, b: 2, c: 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {});
        console.log(JSON.stringify(v7));
        // => {"1":["a","c"],"2":["b"]}
        const array = [[0, 1], [2, 3], [4, 5]];
        const v8 = _.reduceRight(array, (flattened, other) => {
            return flattened.concat(other);
        }, []);
        console.log(JSON.stringify(v8));
        // => [4,5,2,3,0,1]
    }
    rejectFunc() {
        const users = [
            { user: "barney", age: 36, active: false },
            { user: "fred", age: 40, active: true },
        ];
        const v1 = _.reject(users, (o) => !o.active);
        console.log(JSON.stringify(v1));
        // => [{"user":"fred","age":40,"active":true}]
        const v2 = _.reject(users, { age: 40, active: true });
        console.log(JSON.stringify(v2));
        // => [{"user":"barney","age":36,"active":false}]
        const v3 = _.reject(users, ["active", false]);
        console.log(JSON.stringify(v3));
        // => [{"user":"fred","age":40,"active":true}]
        const v4 = _.reject(users, "active");
        console.log(JSON.stringify(v4));
        // => [{"user":"barney","age":36,"active":false}]
        const v5 = _.sample([1, 2, 3, 4]);
        console.log(JSON.stringify(v5));
        // => 4
        const v6 = _.sampleSize([1, 2, 3], 2);
        console.log(JSON.stringify(v6));
        // => [1,2]
        const v7 = _.sampleSize([1, 2, 3], 4);
        console.log(JSON.stringify(v7));
        // => [2,1,3]
        const v8 = _.shuffle([1, 2, 3, 4]);
        console.log(JSON.stringify(v8));
        // => [1,2,4,3]
    }
    sizeFunc() {
        console.log(_.size([1, 2, 3]));
        // => 3
        console.log(_.size({ a: 1, b: 2 }));
        // => 2
        console.log(_.size("pebbles"));
        // => 7
        const v0 = _.some([null, 0, "yes", false], Boolean);
        console.log(JSON.stringify(v0));
        // => true
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false },
        ];
        const v3 = _.some(users, { user: "barney", active: false });
        console.log(JSON.stringify(v3));
        // => false
        const v4 = _.some(users, ["active", false]);
        console.log(JSON.stringify(v4));
        // => true
        const v5 = _.some(users, "active");
        console.log(JSON.stringify(v5));
        // => true
        const user1 = [
            { user: "fred", age: 48 },
            { user: "barney", age: 36 },
            { user: "fred", age: 40 },
            { user: "barney", age: 34 },
        ];
        const v1 = _.sortBy(user1, [(o) => o.user]);
        console.log(JSON.stringify(v1));
        // => [{"user":"barney","age":36},{"user":"barney","age":34},{"user":"fred","age":48},{"user":"fred","age":40}]
        const v2 = _.sortBy(user1, ["user", "age"]);
        console.log(JSON.stringify(v2));
        // => [{"user":"barney","age":34},{"user":"barney","age":36},{"user":"fred","age":40},{"user":"fred","age":48}]
        console.log(_.now());
        // => 1534490821064
        _.defer((stamp) => {
            console.log(_.now() - stamp);
        }, _.now());
        // => 4
    }
}
exports.CollectionPoc = CollectionPoc;
//# sourceMappingURL=CollectionPoc.js.map