function addToCart(productName="Armut",quantity=0) {//değer gönderilmezse default değeri Armut olur
    
    console.log("sepete eklendi ! "+"ürün : "+productName+" adet : "+quantity)

}
addToCart( )
addToCart("Elma")
addToCart("Yumurta",19)

let sayHello=()=>{
    console.log("Hello world!")
}

sayHello()

let sayHello2=function(params){
    console.log("Hello 2")
}

sayHello2()

let product1={productName:"Ananas",unitPrice:100,quantity:21}

function addToCart1(product){
    console.log("Ürün : "+product.productName+" Adet : "+product.quantity+" Fiyat : "+product.unitPrice)
}

addToCart1(product1)

let product2={productName:"Muz",unitPrice:100,quantity:21}
let product3={productName:"Karpuz",unitPrice:107,quantity:6}
product2=product3
product2.productName="ERIK"
console.log(product3.productName)