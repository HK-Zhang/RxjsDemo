"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class StringPoc {
    test() {
        this.camelCaseFunc();
    }
    camelCaseFunc() {
        _.camelCase("Foo Bar");
        //  => 'fooBar'
        _.camelCase("--foo-bar--");
        //  => 'fooBar'
        _.camelCase("__FOO_BAR__");
        //  => 'fooBar'
        _.capitalize("FRED");
        //  => 'Fred'
        _.deburr("déjà vu");
        //  => 'deja vu'
        _.endsWith("abc", "c");
        //  => true
        _.endsWith("abc", "b");
        //  => false
        _.endsWith("abc", "b", 2);
        //  => true
        _.escape("fred, barney, & pebbles");
        //  => 'fred, barney, &amp; pebbles'
        _.escapeRegExp("[lodash](https://lodash.com/)");
        //  => '\[lodash\]\(https://lodash\.com/\)'
        _.kebabCase("Foo Bar");
        //  => 'foo-bar'
        _.kebabCase("fooBar");
        //  => 'foo-bar'
        _.kebabCase("__FOO_BAR__");
        //  => 'foo-bar'
        _.lowerCase("--Foo-Bar--");
        //  => 'foo bar'
        _.lowerCase("fooBar");
        //  => 'foo bar'
        _.lowerCase("__FOO_BAR__");
        //  => 'foo bar'
        _.lowerFirst("Fred");
        //  => 'fred'
        _.lowerFirst("FRED");
        //  => 'fRED'
        _.pad("abc", 8);
        //  => '  abc   '
        _.pad("abc", 8, "_-");
        //  => '_-abc_-_'
        _.pad("abc", 3);
        //  => 'abc'
        _.padEnd("abc", 6);
        //  => 'abc   '
        _.padEnd("abc", 6, "_-");
        //  => 'abc_-_'
        _.padEnd("abc", 3);
        //  => 'abc'
        _.padStart("abc", 6);
        //  => '   abc'
        _.padStart("abc", 6, "_-");
        //  => '_-_abc'
        _.padStart("abc", 3);
        //  => 'abc'
        _.parseInt("08");
        //  => 8
        _.map(["6", "08", "10"], _.parseInt);
        //  => [6, 8, 10]
    }
}
exports.StringPoc = StringPoc;
//# sourceMappingURL=StringPoc.js.map