export class CallBagPoc {
    public test() {
        this.producer("start", this.consumer);
    }

    public producer(type, payload) {
        if (type === "start") {
            const consumer = payload;
            let i = 0;
            let handle;
            consumer("start", (t, p) => {
                if (t === "data") { i = p; }
                if (t === "stop") { clearInterval(handle); }
            });

            handle = setInterval(() => {
                consumer("data", i++);
            }, 1000);
        }
    }

    public consumer(type, payload) {
        if (type === "start") {
            const cb = payload;
            setTimeout(() => {
                cb("data", 17);
            }, 3500);
            setTimeout(() => {
                cb("stop");
            }, 7500);
        }

        if (type === "data") {
            console.log(payload);
        }
    }
}
