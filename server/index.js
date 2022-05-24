const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crudtest"
});

app.use(cors());
app.use(express.json());

app.post("/saveorupdate", (request, response) => {
  const { name } = request.body;
  const { age } = request.body;
  const { id } = request.body;

  let SQL = "";

  if(id === 0) {
    console.log('novo cliente');
    SQL = "INSERT INTO clients (name, age) VALUES (?, ?)";
  } else {
    console.log('atualizando cliente',id);
    SQL = "UPDATE clients SET name = ?, age = ? WHERE idclients = ?";
  }

  db.query(SQL, [name, age, id], (error, result) => {
    console.log(error);
  })
});

app.get("/db", (request, response) => {
  let SQL = "SELECT * from clients";

  db.query(SQL, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  })
});

app.post("/delete", (request, response) => {
  const { id } = request.body;

  let SQL = "DELETE FROM clients WHERE idclients = ?";

  db.query(SQL, [id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      response.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log("rodando servidor")
});
