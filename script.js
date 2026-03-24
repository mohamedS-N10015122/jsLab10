class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price
        this.quantity = quantity;

    }
getTotalValue(){
    return this.price*this.quantity;
}
toString(){
    return "Product: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity;
}
static applyDiscount(products, discount){
    let tempObj;
    for (let index = 0; index < products.length; index++) {
    tempObj = products[index];
    tempObj.price = (tempObj.price * discount)
    }
}
//todo: add comments
}
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name,price,quantity);
        this.expirationDate = expirationDate;
    }
    toString(){
    return "Product: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity + ", Expiration Date: " + this.expirationDate;
}
}
class Store{
    constructor(array) {
        this.array = array
    }
}
let product1 = new PerishableProductProperties("Apple", 2.99, 10, "December 14, 2026")
let product2 = new PerishableProductProperties("Banana", 1.99, 10, "March 24, 2027")