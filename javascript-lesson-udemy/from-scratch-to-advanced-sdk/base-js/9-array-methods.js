let students=["Yiğit","Ahmet","Mehmet","Ada"];

result=students.length;

//Array to String
result=students.toString();
result=students.join("-");
result=students.pop();//son eleman silinir ve silinen eleman geri döndürülür.
result=students.shift();//ilk eleman silinir ve geriye döndürülür.
result=students.push("sena");//dizinin sonuna eleman eklenir.
result=students.unshift("Kaya");//dizinin başına elemanı ekler.

let cars=["Mazda","Kia"];
let cars2=["Opel","Mercedes"];
let cars1=["Mercedes","Hundai"];

result=cars.concat(cars1);//cars'ı cars1 ile birleştirir.



console.log(result);
console.log(students);