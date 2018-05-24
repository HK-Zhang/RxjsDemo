import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/concatMap";
import "rxjs/add/operator/timeout";
import { Observable } from "rxjs/Observable";



export class TimeoutPoc {

    public test() {
        this.func1();
    }

    public makeRequest(timeToDelay) {
        return Observable.of("Request Complete!").delay(timeToDelay);
    }

    public func1() {
        Observable.of(4000, 3000, 2000)
            .concatMap((duration) =>
                this.makeRequest(duration)
                    .timeout(2500)
                    .catch((error) => Observable.of(`Request timed out after: ${duration}`)),
            )
            /*
            *  "Request timed out after: 4000"
            *  "Request timed out after: 3000"
            *  "Request Complete!"
            */
            .subscribe((val) => console.log(val));
    }

}
