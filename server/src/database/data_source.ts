import "reflect-metadata";
import { DataSource } from "typeorm";
//require('dotenv/config');

export const MysqlDataSource = new DataSource({
  type: "postgres",
  host: "192.168.0.3",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "locker-it",
  entities: [],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
});

MysqlDataSource.initialize()
    .then(() => {
        console.log("Mysql Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Mysql Data Source initialization", err)
    });



/*host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["src/migrations/*.ts"],*/