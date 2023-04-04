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