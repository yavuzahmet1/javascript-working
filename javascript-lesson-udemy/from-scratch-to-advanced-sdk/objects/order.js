let order1 = {
  orderId: 101,
  orderDate: "30.12.2022",
  paymentMethod: "Credit Card",
  shippingAddress: {
    adres: "Süleymaniye",
    county: "Gebze",
    province: "Kocaeli",
  },
  products: [
    {
      productId: 6,
      productName: "Iphone 13",
      productUrl: "http//abc/phone",
      productPrice: 22000
    },
    {
      productId: 10,
      productName: "Iphone 11",
      productUrl: "http//abc/phone/iphone11",
      productPrice: 16000
    },
  ],
};
let order2 = {
  orderId: 102,
  orderDate: "30.12.2022",
  paymentMethod: "Credit Card",
  shippingAddress: {
    adres: "Süleymaniye",
    county: "Gebze",
    province: "Kocaeli",
  },
  products: [
    {
      productId: 1,
      productName: "Iphone 14",
      productUrl: "http//abc/phone/iphone14",
      productPrice: 28000,
    },
    {
      productId: 7,
      productName: "Iphone 12 Pro Max",
      productUrl: "http//abc/phone/iphone12",
      productPrice: 19000,
    },
  ],
};

let total1 =
  (order1.products[0].productPrice + order2.products[1].productPrice) * 1.18;
let total2 =
  (order1.products[1].productPrice + order2.products[0].productPrice) * 1.18;

let totalPrice = total1 + total2;

console.log("order 1 total price :" + total1);
console.log("order 2 total price :" + total2);

console.log("total payment : " + totalPrice);

let orders = [order1, order2];
