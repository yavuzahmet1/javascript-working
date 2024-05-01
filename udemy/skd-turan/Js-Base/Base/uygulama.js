let numbers = [1, 5, 7, 15, 3, 25, 10, 18];

//sayılar dizesinin içindeki her elemanın karesi

for (let number of numbers) {
  console.log(number * number);
}

//sayolar dizesinin içindeki kaç eleman 5'in katı
let counter = 0;
for (let num of numbers) {
  if (num % 5 === 0) {
    counter++;
  }
}
console.log(`5'in kati ${counter} sayi vardir.`);

//sayilar dizsinde 2'nin katı olan sayıların toplamı
let total = 0;
for (let num of numbers) {
  if (num % 2 === 0) {
    total += num;
  }
}
console.log(`2'nin katı olan sayıları toplamı ${total}`);

let products = ["iphone", "tv", "earphone", "samsung", "beats"];
//ürünler listesinin tüm ürünleri büyük harfle yazdırınız.

for (let product of products) {
  console.log(product.toUpperCase());
}

let count = 0;
for (let product of products) {
  if (product.includes("phone")) {
    count++;
  }
}
console.log(count);
