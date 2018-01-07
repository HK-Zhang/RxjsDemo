"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = require("typescript-collections");
var DictionaryPoc = /** @class */ (function () {
    function DictionaryPoc() {
    }
    DictionaryPoc.prototype.test = function () {
        this.func1();
    };
    DictionaryPoc.prototype.func1 = function () {
        var dict = new Collections.Dictionary();
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
        var person = new Person("john", 1970);
        console.log("-Person:");
        console.log(person);
        var car = dict.getValue(person);
        console.log("-Car:");
        console.log(car.toString());
    };
    return DictionaryPoc;
}());
exports.DictionaryPoc = DictionaryPoc;
var Person = /** @class */ (function () {
    function Person(name, yearOfBirth, city) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
    }
    Person.prototype.toString = function () {
        return this.name + "-" + this.yearOfBirth; // City is not a part of the key.
    };
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(company, type, year) {
        this.company = company;
        this.type = type;
        this.year = year;
    }
    Car.prototype.toString = function () {
        // Short hand. Adds each own property
        return Collections.util.makeString(this);
    };
    return Car;
}());
//# sourceMappingURL=DictionaryPoc.js.map