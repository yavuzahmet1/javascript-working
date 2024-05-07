function addToCart(productName = "dish washer", quantity) {
  console.log("added to Cart : " + productName + " quantity : " + quantity);
}

addToCart("computer");
addToCart();
addToCart("egg", 5);

let sayHello=()=>{
    console.log("Hello world!")
}

sayHello()