//Server setup
const express = require("express");
const app = express();
const path = require('path');
const cors = require('cors'); 
const PORT = 3000;



app.use(express.json());
app.use(cors()); 



//Routers
const customer = require("./controller/customer"); //router til customer.js
const product = require("./controller/product"); //router til product.js




//stig for forskellige endpoints
app.use("/customer", customer); //alle endpoints til Customer bruger /customer før endpoint stigen fx /customer/create
app.use("/product", product); //alle endpoints til product bruger /product før endpoint stigen fx /product/select



//view engine setup
app.use(express.static('views'))



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); 
}); 

module.exports = app;