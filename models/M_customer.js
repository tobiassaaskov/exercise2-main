const product_m = require("./M_product")

class Customer {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName; //attribut
    this.lastName = lastName; //attribut
    this.email = email; //attribut
    this.password = password; //attribut
    (this.status_id = "1"), //attribut - default til 1
    (this.timestamp = `${new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")}`);
  }
}


module.exports = Customer;
