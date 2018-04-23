import * as _ from "lodash";

export class FunctionPoc {
    public test() {
        // this.afterPoc();
        // this.bindPoc();
        // this.curryFunc();
        // this.curryRightFunc();
        this.deferFunc();
    }

    public afterPoc() {
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

        const v1 = _.map(["6",  "8",  "10"],  _.ary(parseInt,  1));
        console.log(v1);

        const ff = _.before(4, () => console.log(new Date().getTime().toString()));
        ff();
        ff();
        ff();
        ff();

        // jQuery(element).on('click', _.before(5, addContactToList));
//  => Allows adding up to 4 contacts to the list.
    }

    public bindPoc() {
        function greet(greeting,  punctuation) {
              return greeting + " " + this.user + punctuation;
            }

        const object =  { user:  "fred" };

        const bound1 =  _.bind(greet,  object,  "hi");
        console.log(bound1("!"));
            //  => 'hi fred!'

            //  Bound with placeholders.
        const bound =  _.bind(greet,  object,  _,  "!");
        console.log(bound("hi"));
            //  => 'hi fred!'

        const object2 =  {
                  user:  "fred",
                  greet(greeting,  punctuation) {
                    return greeting + " " + this.user + punctuation;
                  },
                };

        const bound3 =  _.bindKey(object2,  "greet",  "hi");
        console.log(bound3("!"));
                //  => 'hi fred!'

        object2.greet =  function(greeting,  punctuation) {
                  return greeting + "ya " + this.user + punctuation;
                };

        console.log(bound3("!"));
                //  => 'hiya fred!'

                //  Bound with placeholders.
        const bound5 =  _.bindKey(object2,  "greet",  _,  "!");
        console.log(bound5("hi"));
                //  => 'hiya fred!'
    }

    public curryFunc() {
        const abc =  (a,  b,  c) => {
              return [a,  b,  c];
            };

        const curried =  _.curry(abc);

        const v1 = curried(1)(2)(3);
        console.log(v1);
            //  => [1, 2, 3]

        const v2 = curried(1,  2)(3);
        console.log(v2);
            //  => [1, 2, 3]

        const v3 = curried(1,  2,  3);
        console.log(v3);
            //  => [1, 2, 3]

            //  Curried with placeholders.
        // curried(1)(_,  3)(2);
            //  => [1, 2, 3]
    }

    public curryRightFunc() {
        const abc =  (a,  b,  c) => {
              return [a,  b,  c];
            };

        const curried =  _.curryRight(abc);

        const v1 = curried(3)(2)(1);
        console.log(v1);
            //  => [1, 2, 3]

        const v2 = curried(2,  3)(1);
        console.log(v2);
            //  => [1, 2, 3]

        const v3 = curried(1,  2,  3);
        console.log(v3);
            //  => [1, 2, 3]

            //  Curried with placeholders.
        // curried(3)(1,  _)(2);
            //  => [1, 2, 3]
    }

    public deferFunc() {

        _.delay((text) => {
              console.log(text);
            },  1000,  "later");
            //  => Logs 'later' after one second.

        _.defer((text) => {
              console.log(text);
            },  "deferred");
            //  => Logs 'deferred' after one millisecond.
    }
}
