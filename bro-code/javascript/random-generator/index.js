

const myButton=document.getElementById("btnRandom");
const myLabel1=document.getElementById("myLabel1");
const myLabel2=document.getElementById("myLabel2");
const myLabel3=document.getElementById("myLabel3");
const min =1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    myLabel1.textContent=randomNum1;
    myLabel2.textContent=randomNum2;
    myLabel3.textContent=randomNum3;
}


/*document.getElementById("btnRandom").onclickclick=function(){
    for (let index = 1; index <= 10; index++) {
        let randomNum = Math.floor(Math.random() * (max-min)) + 1;
        console.log(`${index} : ${randomNum}`);
        document.getElementById("myLabel").textContent=`${index} : ${randomNum}`
      }
}
*/
