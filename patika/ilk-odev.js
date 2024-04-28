let firstName=document.querySelector("#myName");
let timeLoad=document.querySelector("#myClock")
firstName.innerHTML=prompt()
timeLoad.addEventListener("click",dateClock)

function dateClock() {
    var date = new Date().toLocaleString('tr-TR'); // tarih saati al
    timeLoad.innerHTML = date; // zaman id'li elemente yazdır
}
