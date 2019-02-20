import * as fs from "fs";
import * as sqlite3 from "sqlite3";

export class SqliteDB {
    public exist: boolean;
    public db: sqlite3.Database;

    constructor(file: string) {
        this.db = new sqlite3.Database(file);
        this.exist = fs.existsSync(file);

        if(!this.exist) {
            console.log("Creating db file!");
            fs.openSync(file, "w");
        }
    }

    public printErrorInfo(err) {
        console.log("Error Message:" + err.message + " ErrorNumber:" + err.no);
    }

    public createTable(sql) {
        this.db.serialize(() => {
            this.db.run(sql, (err) => {
                if (null != err) {
                    this.printErrorInfo(err);
                    return;
                }
            });
        });
    }

    public insertData(sql, objects) {
        this.db.serialize(() => {
            const stmt = this.db.prepare(sql);
            for (const i of objects) {
                stmt.run(i);
            }
            stmt.finalize();
        });
    }

    public queryData(sql, callback) {
        this.db.all(sql, (err, rows) => {
            if (null != err) {
                this.printErrorInfo(err);
                return;
            }
            /// deal query data.
            if (callback) {
                callback(rows);
            }
        });
    }

    public executeSql(sql: string) {
        this.db.run(sql, (err) => {
            if (null != err) {
                this.printErrorInfo(err);
            }
        });
    }

    public close() {
        this.db.close();
    }
}
