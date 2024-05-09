function addToCart(productName = "dish washer", quantity) {
  console.log("added to Cart : " + productName + " quantity : " + quantity);
}

addToCart("computer");
addToCart();
addToCart("egg", 5);

let sayHello = () => {
  console.log("Hello world!");
};

sayHello();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Kiraz", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);

function addToCart4(x) {
  console.log(products);
}

let products = [
  {productName: "Elma", unitPrice: 10, quantity: 5},
  {productName: "Armut", unitPrice: 10, quantity: 5},
  {productName: "Kiraz", unitPrice: 10, quantity: 5},
  {productName: "Kayısı", unitPrice: 10, quantity: 5}
];

addToCart4(products)

function add(...numbers){
  console.log(Math.random(...numbers))
}

add(20,50,100)
