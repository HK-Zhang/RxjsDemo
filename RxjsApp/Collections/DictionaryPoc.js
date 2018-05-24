"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collections = require("typescript-collections");
class DictionaryPoc {
    test() {
        this.func1();
    }
    func1() {
        const dict = new Collections.Dictionary();
        dict.setValue(new Person("john", 1970, "melbourne"), new Car("honda", "city", 2002));
        dict.setValue(new Person("gavin", 1984), new Car("ferrari", "F50", 2006));
        console.log("Orig");
        console.log(dict);
        // Changes the same john, since city is not part of key
        dict.setValue(new Person("john", 1970, "sydney"), new Car("honda", "accord", 2006));
        // Add a new john
        dict.setValue(new Person("john", 1971), new Car("nissan", "micra", 2010));
        console.log("Updated");
        console.log(dict);
        // Showing getting / setting a single car:
        console.log("Single Item");
        const person = new Person("john", 1970);
        console.log("-Person:");
        console.log(person);
        const car = dict.getValue(person);
        console.log("-Car:");
        console.log(car.toString());
    }
}
exports.DictionaryPoc = DictionaryPoc;
// tslint:disable-next-line:max-classes-per-file
class Person {
    constructor(name, yearOfBirth, city) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
    }
    toString() {
        return this.name + "-" + this.yearOfBirth; // City is not a part of the key.
    }
}
// tslint:disable-next-line:max-classes-per-file
class Car {
    constructor(company, type, year) {
        this.company = company;
        this.type = type;
        this.year = year;
    }
    toString() {
        // Short hand. Adds each own property
        return Collections.util.makeString(this);
    }
}
//# sourceMappingURL=DictionaryPoc.js.map