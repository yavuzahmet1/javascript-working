const btn=document.getElementById("btn");
const inputNumber=document.getElementById("inputNumber");
const diceResult=document.getElementById("diceResult");
const diceImages=document.getElementById("diceImages");


btn.addEventListener("click",()=>{
    let randomNumber=0;
    let arrayDice=[];
    let images=[];
    diceResult.textContent=""

    let enterValue=Number(inputNumber.value)
  
    for(let i=0;i<enterValue;i++){
        randomNumber=Math.floor(Math.random()*6)+1;
        arrayDice.push(randomNumber)
       // images.push(`<img src="images/dice${randomNumber}.png" alt="">`)
        
    }

    diceResult.textContent="Dice :" +arrayDice;
for(let y of arrayDice){
    diceImages.textContent="asaasasas"
// todo diceImages.innerHTML=(`<img src="images/dice${y}.png" alt="">`).join(" ")
}
    

})


