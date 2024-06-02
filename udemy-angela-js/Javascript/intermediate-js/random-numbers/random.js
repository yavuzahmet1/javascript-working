const nameMe=document.getElementById("name1").textContent;
const nameCroush=document.getElementById("name2").textContent;
const buttons=document.getElementById("btn");
console.log(nameMe)
buttons =function result1(nameMe,nameCroush){
    console.log(nameMe)
    document.getElementById("result")= nameMe & nameCroush
}