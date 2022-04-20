// imports
const express = require("express");
const Customer = require("../models/M_customer");
const router = express.Router();
const connection = require("../DB/connection");
var Request = require("tedious").Request;
const path = require('path');
const { request } = require("http");

// index-siden
router.get('/', (req, res) => {                               
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

// endpoint til at hente customer på baggrund af id
router.get("/select", (req, res) => {
  request = new Request(
    `SELECT * FROM Customer WHERE customer_id = '${req.body.customer_id}'`,

    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);
  res.status(200).send(true);
});

// endpoint til oprettelse af bruger
router.post("/user/create", (req, res) => {
  request = new Request(
    `INSERT INTO Customer (first_name, last_name, email, password, status_id, timestamp) VALUES (
      '${req.body.firstName}', 
      '${req.body.lastName}', 
      '${req.body.email}', 
      '${req.body.password}', 
      '1',
      '${new Date().toISOString().slice(0, 19).replace("T", " ")}')`, //laver en JS dato om til et validt datetime i SQL
   
      function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);
  res.status(201).send(true);
});

router.post("/login", (req, res) => {
  request = new Request(
    `SELECT email, password FROM Customer WHERE email = ('${req.body.email}' AND password = ${req.body.password})`,
    
      function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);

  request.on('doneInProc', function (rowCount, more, rows) { });

// doneinproc

  res.status(201).send('Brugeren blev fundet');
});




//endpoint til at slette bruger
router.delete("/delete", (req, res) => {
  request = new Request(
    `DELETE FROM Customer WHERE customer_id = '${req.body.customer_id}'`, //sletter ud fra det id vi giver den

    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);
  res.status(200).send(true);
});

// endpoint til at opdatere customer bortset fra id
router.put("/update", (req, res) => {
  request = new Request(
    // `INSERT INTO Customer VALUES (${new Customer})`

    `UPDATE Customer SET 
    first_name = '${req.body.first_name}', 
    last_name = '${req.body.last_name}', 
    email = '${req.body.email}', 
    password = '${req.body.password}'
    WHERE customer_id = '${req.body.customer_id}'`,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);
  res.status(201).send(true);
});

module.exports = router;
