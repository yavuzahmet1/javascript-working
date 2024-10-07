const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector("[data-minute-hand]");
const secondHand=document.querySelector("[data-second-hand]");

setInterval(setClock,1000)

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds()/60
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60
    const hoursRatio=(minutesRatio+currentDate.getHours())/120

    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(element,rotationRatio){
element.style.setProperty('--rotation',rotationRatio*360)
}
setClock()


// let sayac = 0;
// const aralik = setInterval(() => {
//     sayac++;
//     console.log(`Sayaç: ${sayac}`);
    
//     // Belirli bir şart sağlandığında durdurma
//     if (sayac === 5) {
//         clearInterval(aralik);
//     }
// }, 1000); // 1 saniyede bir çalışır