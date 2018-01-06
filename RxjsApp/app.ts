import { ofPoc } from './RxjsOf'
import { doPoc } from './RxjsDo'
import { MapPoc, MergeMapPoc, SwithMapPoc, ConcatMapPoc } from './Transformation'
import { ConcatPoc, ForkJoinPoc, CombineLatestPoc, PairwisePoc } from './Combination'


//let a = new ofPoc();
//let a = new doPoc();
//let a = new SwithMapPoc();
//let a = new MergeMapPoc();
//let a = new MapPoc();
//let a = new ConcatMapPoc();
//let a = new ConcatPoc();
//let a = new ForkJoinPoc();
//let a = new CombineLatestPoc();
let a = new PairwisePoc();


a.test();
