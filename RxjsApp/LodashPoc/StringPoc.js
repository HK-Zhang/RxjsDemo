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
    repeatFunc() {
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
        _.startsWith("abc", "a");
        //  => true
        _.startsWith("abc", "b");
        //  => false
        _.startsWith("abc", "b", 1);
        //  => true
    }
    templateFunc() {
        //  Use the "interpolate" delimiter to create a compiled template.
        let compiled = _.template("hello <%= user %>!");
        compiled({ user: "fred" });
        //  => 'hello fred!'
        //  Use the HTML "escape" delimiter to escape data property values.
        compiled = _.template("<b><%- value %></b>");
        compiled({ value: "<script>" });
        //  => '<b>&lt;script&gt;</b>'
        //  Use the "evaluate" delimiter to execute JavaScript and generate HTML.
        compiled = _.template("<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>");
        compiled({ users: ["fred", "barney"] });
        //  => '<li>fred</li><li>barney</li>'
        //  Use the internal `print` function in "evaluate" delimiters.
        compiled = _.template('<% print("hello " + user); %>!');
        compiled({ user: "barney" });
        //  => 'hello barney!'
        //  Use the ES template literal delimiter as an "interpolate" delimiter.
        //  Disable support by replacing the "interpolate" delimiter.
        compiled = _.template("hello ${ user }!");
        compiled({ user: "pebbles" });
        //  => 'hello pebbles!'
        //  Use backslashes to treat delimiters as plain text.
        compiled = _.template('<%= "\\<%- value %\\>" %>');
        compiled({ value: "ignored" });
        //  => '<%- value %>'
        // //  Use the `imports` option to import `jQuery` as `jq`.
        // const  text  = "<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>";
        // compiled  = _.template(text, {  imports: {  jq: jQuery  }  });
        // compiled({  users: ["fred", "barney"]  });
        // //  => '<li>fred</li><li>barney</li>'
        // //  Use the `sourceURL` option to specify a custom sourceURL for the template.
        // compiled  = _.template("hello <%= user %>!", {  sourceURL: "/basic/greeting.jst"  });
        // compiled(data);
        // //  => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
        // //  Use the `variable` option to ensure a with-statement isn't used in the compiled template.
        // compiled  = _.template("hi <%= data.user %>!", {  variable: "data"  });
        // compiled.source;
        // //  => function(data) {
        // //    var __t, __p = '';
        // //    __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
        // //    return __p;
        // //  }
        //  Use custom template delimiters.
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        compiled = _.template("hello {{ user }}!");
        compiled({ user: "mustache" });
        //  => 'hello mustache!'
        //  Use the `source` property to inline compiled templates for meaningful
        //  line numbers in error messages and stack traces.
        //         fs.writeFileSync(path.join(process.cwd(), "jst.js"), '\
        //   var JST = {\
        //     "main": ' +  _.template(mainText).source  +  "\
        //   };\
        // ");
    }
    toLowerFunc() {
        _.toLower("--Foo-Bar--");
        //  => '--foo-bar--'
        _.toLower("fooBar");
        //  => 'foobar'
        _.toLower("__FOO_BAR__");
        //  => '__foo_bar__'
        _.toUpper("--foo-bar--");
        //  => '--FOO-BAR--'
        _.toUpper("fooBar");
        //  => 'FOOBAR'
        _.toUpper("__foo_bar__");
        //  => '__FOO_BAR__'
        _.trim("  abc  ");
        //  => 'abc'
        _.trim("-_-abc-_-", "_-");
        //  => 'abc'
        _.map(["  foo  ", "  bar  "], _.trim);
        //  => ['foo', 'bar']
        _.trimEnd("  abc  ");
        //  => '  abc'
        _.trimEnd("-_-abc-_-", "_-");
        //  => '-_-abc'
        _.trimStart("  abc  ");
        //  => 'abc  '
        _.trimStart("-_-abc-_-", "_-");
        //  => 'abc-_-'
        _.truncate("hi-diddly-ho there, neighborino");
        //  => 'hi-diddly-ho there, neighbo...'
        _.truncate("hi-diddly-ho there, neighborino", {
            length: 24,
            separator: " ",
        });
        //  => 'hi-diddly-ho there,...'
        _.truncate("hi-diddly-ho there, neighborino", {
            length: 24,
            separator: /,? +/,
        });
        //  => 'hi-diddly-ho there...'
        _.truncate("hi-diddly-ho there, neighborino", {
            omission: " [...]",
        });
        //  => 'hi-diddly-ho there, neig [...]'
        _.unescape("fred, barney, &amp; pebbles");
        //  => 'fred, barney, & pebbles'
        _.upperCase("--foo-bar");
        //  => 'FOO BAR'
        _.upperCase("fooBar");
        //  => 'FOO BAR'
        _.upperCase("__foo_bar__");
        //  => 'FOO BAR'
        _.upperFirst("fred");
        //  => 'Fred'
        _.upperFirst("FRED");
        //  => 'FRED'
        _.words("fred, barney, & pebbles");
        //  => ['fred', 'barney', 'pebbles']
        _.words("fred, barney, & pebbles", /[^, ]+/g);
        //  => ['fred', 'barney', '&', 'pebbles']
    }
}
exports.StringPoc = StringPoc;
//# sourceMappingURL=StringPoc.js.map