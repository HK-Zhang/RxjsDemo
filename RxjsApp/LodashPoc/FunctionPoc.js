"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class FunctionPoc {
    test() {
        // this.afterPoc();
        this.bindPoc();
    }
    afterPoc() {
        const fp = _.after(3, () => console.log("OMG!"));
        fp(); // Nothing
        fp(); // Nothing
        fp(); // Prints "OMG!"
        //         var saves = ['profile', 'settings'];
        //
        // var done = _.after(saves.length, function() {
        //   console.log('done saving!');
        // });
        //
        // _.forEach(saves, function(type) {
        //   asyncSave({ 'type': type, 'complete': done });
        // });
        //  => Logs 'done saving!' after the two async saves have completed.
        const v1 = _.map(["6", "8", "10"], _.ary(parseInt, 1));
        console.log(v1);
        const ff = _.before(4, () => console.log(new Date().getTime().toString()));
        ff();
        ff();
        ff();
        ff();
        // jQuery(element).on('click', _.before(5, addContactToList));
        //  => Allows adding up to 4 contacts to the list.
    }
    bindPoc() {
        function greet(greeting, punctuation) {
            return greeting + " " + this.user + punctuation;
        }
        const object = { user: "fred" };
        const bound1 = _.bind(greet, object, "hi");
        console.log(bound1("!"));
        //  => 'hi fred!'
        //  Bound with placeholders.
        const bound = _.bind(greet, object, _, "!");
        console.log(bound("hi"));
        //  => 'hi fred!'
        const object2 = {
            user: "fred",
            greet(greeting, punctuation) {
                return greeting + " " + this.user + punctuation;
            },
        };
        const bound3 = _.bindKey(object2, "greet", "hi");
        console.log(bound3("!"));
        //  => 'hi fred!'
        object2.greet = function (greeting, punctuation) {
            return greeting + "ya " + this.user + punctuation;
        };
        console.log(bound3("!"));
        //  => 'hiya fred!'
        //  Bound with placeholders.
        const bound5 = _.bindKey(object2, "greet", _, "!");
        console.log(bound5("hi"));
        //  => 'hiya fred!'
    }
}
exports.FunctionPoc = FunctionPoc;
//# sourceMappingURL=FunctionPoc.js.map