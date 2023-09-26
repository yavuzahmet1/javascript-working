let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adim "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adim ${ad} ${soyad}`);

let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"

console.log(email.length);
console.log(firstName[0]);
console.log(firstName.charAt(0));
console.log(email.search("@"));//not found -1, found 
console.log(email.slice(1,5))
console.log(email.slice(email.search("@")+1)) //kodluyoruz.org
console.log(email.slice(email.search("@")))//@kodluyoruz.org
console.log(email.replace("@kodluyoruz.org", "@yandex.com"))