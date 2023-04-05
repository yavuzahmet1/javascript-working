function addToCart(productName = "Armut", quantity = 0) {//değer gönderilmezse default değeri Armut olur

    console.log("sepete eklendi ! " + "ürün : " + productName + " adet : " + quantity)

}
addToCart()
addToCart("Elma")
addToCart("Yumurta", 19)

let sayHello = () => {
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function (params) {
    console.log("Hello 2")
}

sayHello2()

let product1 = { productName: "Ananas", unitPrice: 100, quantity: 21 }

function addToCart1(product) {
    console.log("Ürün : " + product.productName + " Adet : " + product.quantity + " Fiyat : " + product.unitPrice)
}

addToCart1(product1)

let product10 = { productName: "Muz", unitPrice: 100, quantity: 21 }
let product20 = { productName: "Karpuz", unitPrice: 107, quantity: 6 }
product10 = product20
product10.productName = "ERIK"
console.log(product20.productName)//referans tiplidir çıktısı ERIK olur

function addToCart4(x) {

    console.log(products)

}

let products = [
    { productName: "Bilgisayar", unitPrice: 107, quantity: 6 },
    { productName: "Telefon", unitPrice: 107, quantity: 6 },
    { productName: "Beyaz Eşya", unitPrice: 107, quantity: 6 }
]

addToCart4(products)

function add(...numbers) {
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        //console.log(numbers[index])
        total += numbers[index]

    }
    console.log(total)
}

add(30, 43)
add(30, 43, 54)
add(30, 43, 33, 100)

let numbers = [33, 41, 2, 3, 66, 876, 9]
console.log(...numbers)
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//let regions=["Akdeniz","İç Anadolu","Doğu Anadolu","Karadeniz"]
//console.log(regions[1])

let [akdeniz, icAnadolu, dogu, karadeniz, [akdenizSehirleri, icAnadoluSehirleri, doguSehirleri, karadenizSehirleri]] = [
    "Akdeniz",
    { name: "İç Anadolu", population: "20M" },
    "Doğu Anadolu",
    "Karadeniz",
    [
        ["Adana", "Antalya"],
        ["Ankara", "Kırıkkale"],
        ["Erzurum", "Kars"],
        ["Trabzon", "Rize"]

    ]
]
console.log(akdeniz)
console.log(icAnadolu)
console.log(icAnadolu.population)
console.log(akdenizSehirleri)
console.log(doguSehirleri)

let productName, unitPrice, quantity
let { productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity }
    = { productName: "Kiraz", unitPrice: 100, quantity: 21 }

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
