var Rx = require('rxjs/Rx');
//import * as Rx from 'rxjs/Rx';

var tfx = function (item, index) {
    return item * 2;
};

var source = Rx.Observable.of(1, 2, 3);

var target = source.map(tfx);

export class ofPoc {

    test() {
        target.subscribe(x => console.log(x));
    }
}