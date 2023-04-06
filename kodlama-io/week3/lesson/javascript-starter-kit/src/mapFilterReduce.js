let cart = [
    { id: 1, productName: "Telephone", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Cam", quantity: 7, unitPrice: 88000 },
    { id: 3, productName: "Beyaz Eşya", quantity: 5, unitPrice: 90000 },
    { id: 4, productName: "Ev Aleti", quantity: 2, unitPrice: 4443 },
    { id: 4, productName: "Aksesuar", quantity: 9, unitPrice: 6510 }
]

function addToCart(cart) {
    cart.push({ id: 7, productName: "Monitör", quantity: 2, unitPrice: 150 })
}

addToCart(cart)

console.log(cart)

//.map 
cart.map(product => console.log(product.productName));

console.log("<ul>")
cart.map(product => {
    console.log(
        "<li>"
        + product.productName + " : "
        + product.unitPrice * product.quantity
        + "<li>")})

console.log("<ul>")

//.filter
let quantityOver5=cart.filter(product=>product.quantity>5&&product.unitPrice>5000)
console.log(quantityOver5)

//.reduce
let total=cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(total)//ürünün birim fiyatını topluyor ilk 0 sonrası topluyor