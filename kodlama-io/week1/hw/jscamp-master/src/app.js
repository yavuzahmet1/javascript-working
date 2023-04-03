let sayi1 = 10;

sayi1 = "Ahmet";
let student = { id: 1, name: "Ahmet", job: "student" }//object notation denir
//console.log(student);

function save(ogrenci,puan=10) {
    //console.log(ogrenci.name+" : "+puan);
}

save(student,44);//puanı göndermezsek default değeri yani 10'u alır gönderirsek 44 olur

let students=["Ahmet","Yavuz","Ali"];

//console.log(students)

let students1=[students,{id:2,name:"Halit"},"Ankara",{city:"Adana"}]

//console.log(students1)

//REST

let showProducts=function(id,...products){
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)//en son aldığı türü öğrenebiliriz,

//showProducts(10,"Karpuz","Armut","Elma")

//SPREAD-> ayrıştırmak

let points=[1,33,23,2,5,4,99]
//console.log(...points)
//console.log(Math.max(...points))
//console.log(Math.max(points))

//DESTRUCTURING
let population=[1000,2000,3000,[999,6777]]
let [small,medium,high,[veryHigh,veryMax]]=population

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(veryMax)