import * as Sequelize from "sequelize";
// const Sequelize = require("sequelize");

export class SequelizeSqite {
    // public sequelize: Sequelize = new Sequelize("sqlite:/data/db3.sqlite");

    public sequelize: Sequelize.Sequelize = new Sequelize("db4", null, null, {
        dialect: "sqlite",
        storage: "./data/db4.sqlite",
    });

    public test() {
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
}
