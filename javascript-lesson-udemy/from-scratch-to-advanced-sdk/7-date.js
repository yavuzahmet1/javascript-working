let now=new Date();
result=now;
//GET Methods
result=now.getDate();//gün bilgisi
result=now.getDay();//0 pazar 6:cumartesi
result=now.getFullYear();//yıl bilgisi
result=now.getHours();//saat kısmı mesala 10
result=now.getMinutes();//dakika kısmı 49

//SET Methods
//now.setFullYear(2025);
//now.setMonth(7);//0 ocak 7 ağustos
now.setDate(15);

result=now;

let birthOfDate=new Date(1987,5,15);

result=now.getFullYear()-birthOfDate.getFullYear();

console.log(result);
console.log(typeof result);