import * as sqlite3 from "sqlite3";
import { SqliteDB } from "./SqliteDB";

export class SqlitePoc {
    public test() {
        // this.dbinmemory();
        // this.dbFile();
        this.dbFile2();
    }

    public dbinmemory() {
        const db = new sqlite3.Database(":memory:");

        db.serialize(() => {
            db.run("CREATE TABLE lorem (info TEXT)");

            const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
            const list = [4, 5, 6];
            // tslint:disable-next-line:forin
            for (const i in list) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();

            db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
                console.log(row.id + ": " + row.info);
            });
        });

        db.close();
    }

    public dbFile2() {
        const db = new SqliteDB("./data/db2.sqlite");

        /// create table.

        // tslint:disable-next-line:max-line-length
        const createTileTableSql = "create table if not exists tiles(level INTEGER, column INTEGER, row INTEGER, content BLOB);";

        // tslint:disable-next-line:max-line-length
        const createLabelTableSql = "create table if not exists labels(level INTEGER, longitude REAL, latitude REAL, content BLOB);";

        db.createTable(createTileTableSql);

        db.createTable(createLabelTableSql);



        /// insert data.

        const tileData = [[1, 10, 10], [1, 11, 11], [1, 10, 9], [1, 11, 9]];

        const insertTileSql = "insert into tiles(level, column, row) values(?, ?, ?)";

        db.insertData(insertTileSql, tileData);



        /// query data.

        // tslint:disable-next-line:max-line-length
        let querySql = "select * from tiles where level = 1 and column >= 10 and column <= 11 and row >= 10 and row <=11";

        db.queryData(querySql, dataDeal);



        /// update data.

        const updateSql = "update tiles set level = 2 where level = 1 and column = 10 and row = 10";

        db.executeSql(updateSql);



        /// query data after update.

        querySql = "select * from tiles where level = 2";

        db.queryData(querySql, dataDeal);



        db.close();



        function dataDeal(objects) {
            for (const i of objects) {
                console.log(i);
            }
        }
    }

    public dbFile() {
        const db = new sqlite3.Database("./data/database.sqlite", (err) => {
            if (err) {
                console.log(err);
            }
        });

        db.run("CREATE TABLE IF NOT EXISTS notes " +
            "(ts DATETIME, author VARCHAR(255), note TEXT)",
            (err) => {
                if (err) {
                    console.log(err);
                }
            });

        db.run("INSERT INTO notes (ts, author, note) " +
            "VALUES (?, ?, ?);",
            [new Date(), "zhk", "it is a poc"],
            (err) => {
                if (err) {
                    console.log(err);
                }
            });

        db.close();
    }
}
