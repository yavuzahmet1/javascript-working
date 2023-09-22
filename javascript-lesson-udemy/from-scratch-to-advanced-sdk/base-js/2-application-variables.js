let ogr1isim="ada bilgi";
let ogr1dogumTarihi=2010;
let ogr1matematikNot1=70;
let ogr1matematikNot2=70;
let ogr1matematikNot3=80;
let ogr1Oratalama=(ogr1matematikNot1+ogr1matematikNot2+ogr1matematikNot3)/3

let ogr2isim="yiğit bilgi";
let ogr2dogumTarihi=2012;
let ogr2matematikNot1=40;
let ogr2matematikNot2=50;
let ogr2matematikNot3=10;
let ogr2Oratalama=(ogr2matematikNot1+ogr2matematikNot2+ogr2matematikNot3)/3

let suankiYil=new Date().getFullYear();

let ogr1Yas=suankiYil-ogr1dogumTarihi;
console.log(ogr1Yas);
let ogr2Yas=suankiYil-ogr2dogumTarihi;
console.log(ogr2Yas);

let gecmeNotu=50;

console.log(ogr1Oratalama>=50);
console.log(ogr2Oratalama>=50);