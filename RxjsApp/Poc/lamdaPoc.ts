export class LamdaPoc {
    public outter = 1;

    public test() {

        // Exception, due to outter is undefined in anonymous function.
        this.executeCallback(function() { console.log(this.outter); });

        // output: 1.
        // An arrow function does not have its own this; the this value of the enclosing execution context is used.
        this.executeCallback(() => {console.log(this.outter); });
    }

    public executeCallback(fun) {
        fun();
    }
}
