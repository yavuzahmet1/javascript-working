let email="ahmet.yavuz@gmail.com"
let firstName="ahmet"
let lastName="YAVUZ"

//string karakter sayısı
console.log(email.length)

//ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)

//string içinde istediğimiz bilgiyi aramak ve yerini bulmak ->search :
console.log(email.search("@"))
console.log(email[11])
console.log(email.search("olmayan"))//içinde aranamayan bişey varsa -1 döner

//belli bir yere kadar olanı almak->slice : domain bilgisi
let DOMAIN=email.slice(email.search("@")+1)//0 dan başladığından +1 deriz
console.log(DOMAIN)

console.log(DOMAIN.slice(0,DOMAIN.indexOf(".")))

//bilgiyi değiştir.
email=email.replace('gmail.com','kodluyoruz.org')
console.log(email)
