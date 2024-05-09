let cart = [
  { id: 1, productName: "Phone", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Computer", quantity: 7, unitPrice: 59000 },
  { id: 3, productName: "Pencil", quantity: 19, unitPrice: 100 },
  { id: 4, productName: "Book", quantity: 58, unitPrice: 300 },
  { id: 5, productName: "Glass", quantity: 21, unitPrice: 90 },
];

console.log("<ul>");
cart.map((product) => {
  console.log(
    `<li>${product.productName} : ${product.unitPrice * product.quantity}</li>`
  );
});
console.log("</ul>");

let quantityOver2 = cart.filter((product) => product.quantity > 7);

console.log(quantityOver2);

let total = cart.reduce((acc, product) => acc + product.unitPrice, 0);

console.log(`toplam : ${total} `);

function addToCart(basket) {
  basket.push({ id: 6, productName: "Bike", quantity: 7, unitPrice: 12500 });
}

addToCart(cart);

console.log(cart);
