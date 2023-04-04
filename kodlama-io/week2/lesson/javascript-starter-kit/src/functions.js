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

let product10={productName:"Muz",unitPrice:100,quantity:21}
let product20={productName:"Karpuz",unitPrice:107,quantity:6}
product10=product20
product10.productName="ERIK"
console.log(product20.productName)//referans tiplidir çıktısı ERIK olur

function addToCart4(x){

    console.log(products)

}

let products=[
    {productName:"Bilgisayar",unitPrice:107,quantity:6},
    {productName:"Telefon",unitPrice:107,quantity:6},
    {productName:"Beyaz Eşya",unitPrice:107,quantity:6}
]

addToCart4(products)