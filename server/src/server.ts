import "reflect-metadata";
import express from 'express';
import './database/data_source';

const app = express();

/*const mysql = require("mysql");


const db = mysql.createPool({
    host: "127.0.0.1",
    user: "pablo",
    password: "admin",
    database: "locker-it",
  });

  app.get("/", (req, res) => {
    let mysql = "INSERT INTO clients ( id, name, email, contact) VALUES ('1', 'teste', 'e.com', '3224')";
    db.query(mysql, (err, result) => {
        console.log(err);
    });
  });*/

  /*var pg = require('pg');

  var conString = "postgres://postgres:admin@192.168.0.3:5432/locker-it";

  var client = new pg.Client(conString);*/

//const Client = require('pg').Client;
/*const client = new Client({
  user: "postgres",
  password: "admin",
  host: "192.168.0.3",
  port: 5432,
  database: "locker-it"
})*/

/*client.connect();

app.get("/", (req, res) => {
  client.query("select * from clients")
.then(results => {
  const resultado = results.rows;
  console.log(resultado);
})
}); */


app.listen(3333, () => console.log("Server is running"));