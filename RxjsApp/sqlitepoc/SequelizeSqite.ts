import * as Sequelize from "sequelize";
// const Sequelize = require("sequelize");

export class SequelizeSqite {
    // public sequelize: Sequelize = new Sequelize("sqlite:/data/db3.sqlite");

    public sequelize: Sequelize.Sequelize = new Sequelize("db4", null, null, {
        dialect: "sqlite",
        storage: "./data/db4.sqlite",
    });

    public test() {
        // this.foo1();
        // this.initialize();
        // this.foo2();
        // this.foo3();
        // this.foo4();
        this.foo5();
    }

    public foo1() {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                console.error("Unable to connect to the database:", err);
            });


        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        this.sequelize.sync()
            .then(() => User.create({
                birthday: new Date(1980, 6, 20),
                username: "janedoe",
            }))
            .then((jane) => {
                console.log(JSON.stringify(jane));
            });
    }

    public initialize() {
        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        for (const u of ["henry", "jimmy", "william", "bill", "jackie"]) {
            User.create({
                birthday: new Date(1980, 6, 20),
                username: u,
            });
        }
    }

    public foo2() {
        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        User.findById(1).then((u) => {
            console.log(JSON.stringify(u));
        });

        User.findOne({where: {username: "janedoe"}}).then((u) => {
            console.log(JSON.stringify(u));
        });
    }

    public foo3() {
        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        User.update({ birthday: new Date("2019-06-20") }, { where: { id: 1 } }).then((u) => {
            console.log(JSON.stringify(u));
        });
    }

    public foo4() {
        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        User.destroy({where: {username: "henry"}}).then((u) => {
            console.log(JSON.stringify(u));
        });
    }

    public foo5() {
        const User = this.sequelize.define("user", {
            birthday: Sequelize.DATE,
            username: Sequelize.STRING,
        });

        User.find({ where: { username: "william" } }).then((u: any) => {
            if (u) {
                u.update({ birthday: new Date("2019-06-20") }).then((t) => {
                    console.log(JSON.stringify(t));
                });
            }
        });
    }
}
