const express = require("express");
const Customer = require("../models/M_customer");
const router = express.Router();
const connection = require("../DB/connection");
var Request = require("tedious").Request;



// endpoint til at hente customer på baggrund af id
router.get("/select", (req, res) => {
  request = new Request(
    `SELECT * FROM Customer WHERE customer_id = '${req.body.customer_id}'`,

    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(request);
      }
    }
  );
  connection.execSql(request);
  res.status(200).send(true);
});


// endpoint til oprettelse af produkt
router.post("/create", (req, res) => {
  request = new Request(
    `INSERT INTO Product VALUES (
        '${req.body.customer_id}', 
        '${req.body.category_id}', 
        '${req.body.size_id}', 
        '${req.body.product_name}', 
        '${req.body.price}', 
        '${req.body.image}',
        '${req.body.location}',  
        '${req.body.product_status}', 
        '${new Date().toISOString().slice(0, 19).replace("T", " ")}')`,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  connection.execSql(request);
  res.status(201).send(true);
});


//endpoint til at slette product
router.delete("/delete", (req, res) => {
  request = new Request(
    `DELETE FROM Product WHERE product_id = '${req.body.product_id}'`, //sletter ud fra det id vi giver den

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
    `UPDATE Product SET
        categori_id = '${req.body.categori_id}',
        size_id = '${req.body.size_id}',
        product_name = '${req.body.product_name}',
        price = '${req.body.price}',
        image = '${req.body.image}',
        location = '${req.body.location}',
        product_status = '${req.body.product_status}'
    WHERE product_id = '${req.body.product_id}'`,

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
