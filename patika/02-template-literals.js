let userName="ahmet"
const DOMAIN="kodluyoruz.org"

let email=userName+"@"+DOMAIN
console.log("Merhaba", userName,"sitemize hoşgeldin","mail adresin", email)

let info=`Merhaba ${userName} sitemize hoşgeldin.. mail adresin : ${email} 
mail adresinin uzunluğu : ${email.length}
borcunuz ${2*99} tl
gunun saat bilgisi : ${new Date().getHours()}
`

console.log(info)