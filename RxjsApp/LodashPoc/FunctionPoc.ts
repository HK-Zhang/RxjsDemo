import * as _ from "lodash";

export class FunctionPoc {
    public test() {
        this.afterPoc();
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
}
