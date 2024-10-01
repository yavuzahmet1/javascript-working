const entered=document.getElementById("entered");
const cel=document.getElementById("cel");
const fah=document.getElementById("fah");
const btn=document.getElementById("submit");
const resut=document.getElementById("resut");

let calculate=0;

btn.addEventListener("click",()=>{
calculate=Number(entered.value)

if (cel.checked){
    calculate=(calculate-32)*(5/9)
    resut.textContent=calculate.toFixed(1)+"°C";
}else if(fah.checked){
    calculate=((calculate*5)/9)+32
    resut.textContent=calculate.toFixed(1)+"°F";
}else{
    console.log("You are not validate number")
    resut.textContent="You are not validate number";
}


})