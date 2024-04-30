//Array oluşturmak
let domain="kodluyoruz";
let isActive=false;
let items=[1,2,3,isActive];

let allItems=[10,20,30,40]
console.log("All Items : ",allItems)

allItems.push(100);

console.log("All Items and 100 push : ",allItems)

allItems.unshift(5)
console.log("All Items and 5 unshift : ",allItems)

allItems.pop()
console.log("All Items pop : ",allItems)