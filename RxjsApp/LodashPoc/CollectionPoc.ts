import * as _ from "lodash";

export class CollectionPoc {
    public test() {
        // this.countFunc();
        this.filterFunc();
        // this.findFunc();
        // this.flapFunc();
        // this.groupbyFunc();
        // this.invokeMapFunc();
        // this.orderbyFunc();
        // this.rejectFunc();
        // this.sizeFunc();
    }

    public countFunc() {
        const v1 = _.countBy([6.1,  4.2,  6.3],  Math.floor);
        const v2 = _.countBy(["one",  "two",  "three"],  "length");

        console.log(v1);
        // => {4: 1, 6: 2}
        console.log(v2);
        // => {3: 2, 5: 1}

        const v3 = _.every([true,  1,  null,  "yes"],  Boolean);
        console.log(v3);
        // => false

        const users =  [
              { user:  "barney",  age:  36,  active:  false },
              { user:  "fred",    age:  40,  active:  false },
            ];

        const v4 = _.every(users,  { user:  "barney",  active:  false });
        console.log(v4);
        // => false

        const v5 = _.every(users,  ["active",  false]);
        console.log(v5);
        // => true
    }

    /**
     * filterFunc
     */
    public filterFunc() {
        const users =  [
              { user:  "barney",  age:  36,  active:  true },
              { user:  "fred",    age:  40,  active:  false },
            ];
        const v1 = _.filter(users, (o) => !o.active);
        console.log(JSON.stringify(v1));
        // => [{"user":"fred","age":40,"active":false}]

        const v2 = _.filter(users, {age: 36, active: true});
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
    public findFunc() {
        const users =  [
              { user:  "barney",   age:  36,  active:  true },
              { user:  "fred",     age:  40,  active:  false },
              { user:  "pebbles",  age:  1,   active:  true },
            ];
        const v1 = _.find(users, (o) => o.age < 40);
        console.log(v1);

        const v2 = _.find(users, {age: 36, active: true});
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
    public flapFunc() {
        const v1 = _.flatMap([1,  2],  (o) => [o, o]);

        console.log(v1);

        _.forEach([1,  2],  (value) => console.log(value));

        _.forEach({ a:  1,  b:  2 },  (value,  key) => {
              console.log(key);
            });

        _.forEachRight([1,  2],  (value) => console.log(value));

    }

    /**
     * groupbyFunc
     */
    public groupbyFunc() {
        const v1 = _.groupBy([6.1,  4.2,  6.3],  Math.floor);
        console.log(v1);

        const v2 = _.groupBy(["one",  "two",  "three"],  "length");
        console.log(v2);

        const v3 = _.includes([1,  2,  3],  1);
        console.log(v3);

        const v4 = _.includes([1,  2,  3],  1,  2);
        console.log(v4);

        const v5 = _.includes({ a:  1,  b:  2 },  1);
        console.log(v5);

        const v6 = _.includes("abcd",  "bc");
        console.log(v6);
    }

    /**
     * invokeMapFunc
     */
    public invokeMapFunc() {
        const v1 = _.invokeMap([[5,  1,  7],  [3,  2,  1]],  "sort");
        console.log(v1);

        const v2 = _.invokeMap([123,  456],  String.prototype.split,  "");
        console.log(v2);

        const array =  [
              { dir:  "left",  code:  97 },
              { dir:  "right",  code:  100 },
            ];

        const v3 = _.keyBy(array,  (o) => {
              return String.fromCharCode(o.code);
            });
        console.log(v3);

        const v4 = _.keyBy(array,  "dir");
        console.log(v4);

        const v5 = _.map([4,  8],  (n) => n * n);
        console.log(v5);

        const users =  [
              { user:  "barney" },
              { user:  "fred" },
            ];
        const v6 = _.map(users,  "user");
        console.log(v6);
    }

    /**
     * orderbyFunc
     */
    public orderbyFunc() {
        const users =  [
              { user:  "fred",    age:  48 },
              { user:  "barney",  age:  34 },
              { user:  "fred",    age:  40 },
              { user:  "barney",  age:  36 },
            ];
        const v1 = _.orderBy(users,  ["user",  "age"],  ["asc",  "desc"]);
        console.log(v1);

        const urs = [
              { user:  "barney",   age:  36,  active:  false },
              { user:  "fred",     age:  40,  active:  true },
              { user:  "pebbles",  age:  1,   active:  false },
            ];
        const v2 = _.partition(urs,  (o) => o.active);
        console.log(v2);

        const v3 = _.partition(users,  { age:  1,  active:  false });
        console.log(v3);

        const v4 = _.partition(users,  ["active",  false]);
        console.log(v4);

        const v5 = _.partition(users,  "active");
        console.log(v5);

        const v6 = _.reduce([1, 2], (sum: number, n) => sum + n);
        console.log(v6);

        const v7 = _.reduce({ a:  1,  b:  2,  c:  1 },  (result,  value,  key) => {
              (result[value] || (result[value] =  [])).push(key);
              return result;
            },  {});
        console.log(v7);

        const array =  [[0,  1],  [2,  3],  [4,  5]];
        const v8 = _.reduceRight(array,  (flattened,  other) => {
          return flattened.concat(other);
        },  []);

        console.log(v8);
    }

    public rejectFunc() {
        const users =  [
              { user:  "barney",  age:  36,  active:  false },
              { user:  "fred",    age:  40,  active:  true },
            ];
        const v1 = _.reject(users,  (o) => !o.active);
        console.log(v1);

        const v2 = _.reject(users,  { age:  40,  active:  true });
        console.log(v2);

        const v3 = _.reject(users,  ["active",  false]);
        console.log(v3);

        const v4 = _.reject(users,  "active");
        console.log(v4);

        const v5 = _.sample([1,  2,  3,  4]);
        console.log(v5);

        const v6 = _.sampleSize([1,  2,  3],  2);
        console.log(v6);

        const v7 = _.sampleSize([1,  2,  3],  4);
        console.log(v7);

        const v8 = _.shuffle([1,  2,  3,  4]);
        console.log(v8);
    }

    public sizeFunc() {
        console.log(_.size([1,  2,  3]));
        console.log(_.size({ a:  1,  b:  2 }));
        console.log(_.size("pebbles"));
        console.log(_.some([null,  0,  "yes",  false],  Boolean));

        const users =  [
              { user:  "barney",  active:  true },
              { user:  "fred",    active:  false },
            ];
        console.log(_.some(users,  { user:  "barney",  active:  false }));

        console.log(_.some(users,  ["active",  false]));

        console.log(_.some(users,  "active"));

        const user1 = [
              { user:  "fred",    age:  48 },
              { user:  "barney",  age:  36 },
              { user:  "fred",    age:  40 },
              { user:  "barney",  age:  34 },
            ];
        const v1 = _.sortBy(users,  [(o) => o.user]);
        console.log(v1);

        const v2 = _.sortBy(users,  ["user",  "age"]);
        console.log(v2);

        console.log(_.now());

        _.defer((stamp) => {
              console.log(_.now() - stamp);
            },  _.now());
    }
}
