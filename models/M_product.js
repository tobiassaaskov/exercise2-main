/*Dette er en classe til producter*/
class Product {
  constructor(product_name, price, image, location) {
    this.customer_id = req.body.customer_id; //Skal indsættes fra den bruger som opretter varen
    this.size_id = new Size("small"); //attribut
    this.product_name = product_name; //attribut
    this.price = price; //attribut
    this.image = image; //attribut
    this.location = location; //attribut
    this.product_status = "1"; //attribut - default til 1 (til salg/true)
    this.timestamp = `${new Date().toISOString().slice(0, 19).replace("T", " ")}`;
  }
}

class Size {
  constructor(size){
    this.id = "1"
    this.size = size
  }
}


module.exports = Product;

