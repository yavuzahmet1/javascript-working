let cart=[
    {id:1,productName:"Telephone",quantity:3,unitPrice:4000},
    {id:2,productName:"Cam",quantity:7,unitPrice:88000},
    {id:3,productName:"Beyaz Eşya",quantity:5,unitPrice:90000},
    {id:4,productName:"Ev Aleti",quantity:2,unitPrice:4443},
    {id:4,productName:"Aksesuar",quantity:9,unitPrice:6510}
]

function addToCart(cart) {
    cart.push({id:7,productName:"Monitör",quantity:2,unitPrice:150})
}

addToCart(cart)

console.log(cart)

cart.map(product=>console.log(product.productName));

cart.map(product =>{
    console.log("<li>"+product.productName+" : "+product.unitPrice*product.quantity+"<li>")
})  






let number=10

function totalNumber(num) {
    num+=1
    console.log(num)
}
totalNumber(number)
console.log(number)
console.log(totalNumber(number))