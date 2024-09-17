function addToCard(productName) {
  console.log(`Added to Card : ` + productName);
}
addToCard("Computer");

function addToCard2(productName, quantity, unitPrice) {}

addToCard2("Apple", 5, 10);
addToCard2("Lemon", 10, 12);
addToCard2("Banana", 2, 4);

let product1 = {
  productName: "Apple",
  unitPrice: 5,
  quantity: 10,
};

function addToCard3(product) {
  console.log("Product Name : " + product.productName);
  console.log("Product Quantity : " + product.quantity);
  console.log("Product UnitPrice : " + product.unitPrice);
}

addToCard3(product1);

let product2 = {
  productName: "Banana",
  unitPrice: 2,
  quantity: 4,
};
let product3 = {
  productName: "Banana",
  unitPrice: 2,
  quantity: 4,
};
product2 = product3;
product2.productName = "Juice";
console.log(product3.productName);
