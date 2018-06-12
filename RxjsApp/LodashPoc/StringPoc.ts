import * as _ from "lodash";

export class StringPoc {
    public test() {
        this.camelCaseFunc();
    }

    public camelCaseFunc() {
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

    public repeatFunc() {
        _.repeat("*", 3);
        //  => '***'

        _.repeat("abc", 2);
        //  => 'abcabc'

        _.repeat("abc", 0);
        //  => ''

        _.replace("Hi Fred", "Fred", "Barney");
        //  => 'Hi Barney'

        _.snakeCase("Foo Bar");
        //  => 'foo_bar'

        _.snakeCase("fooBar");
        //  => 'foo_bar'

        _.snakeCase("--FOO-BAR--");
        //  => 'foo_bar'

        _.split("a-b-c", "-", 2);
        //  => ['a', 'b']

        _.startCase("--foo-bar--");
        //  => 'Foo Bar'

        _.startCase("fooBar");
        //  => 'Foo Bar'

        _.startCase("__FOO_BAR__");
        //  => 'FOO BAR'

        _.startsWith("abc",  "a");
//  => true

        _.startsWith("abc",  "b");
//  => false

        _.startsWith("abc",  "b",  1);
//  => true

    }
}
