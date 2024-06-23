class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product : ${this.name}`);
    console.log(`price : $${this.price.toFixed(2)}`);
  }
}

const product1 = new Product("Shirt", 18.22);
const product2 = new Product("Shoes", 10.15);
const product3 = new Product("Underwear", 8.7);
const product4 = new Product("Underwear", 8.7);

product2.displayProduct();
product3.displayProduct();

let x = [product1, product2, product3, product4];

// const calculate = x.reduce((acc, element) =>
//   console.log(acc.price + element.price)
// );
let totalPrice = 0;
for (let i of x) {
  console.log(i.price);
  totalPrice += i.price;
}

console.log(totalPrice.toFixed(2));
