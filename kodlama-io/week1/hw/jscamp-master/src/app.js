let sayi1 = 10;

sayi1 = "Ahmet";
let student = { id: 1, name: "Ahmet", job: "student" }//object notation denir
//console.log(student);

function save(ogrenci,puan=10) {
    console.log(ogrenci.name+" : "+puan);
}

save(student,44);//puanı göndermezsek default değeri yani 10'u alır gönderirsek 44 olur