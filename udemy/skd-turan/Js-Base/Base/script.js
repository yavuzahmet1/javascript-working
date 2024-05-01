let result=1;
for(let i=1;i<10;i++){

    console.log(`${i} : ${result*=i}`);
}

console.log("-------")
let numbers=[1,4,5,6,7,8,9];

for(let numer in numbers ){
console.log(numer);//index numaraları yazdırılır

}

for(let num of numbers){
    console.log(num)//numbers listesinin içindekiler yazdırılır.
}