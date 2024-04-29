let myName = document.getElementById("myName");



myName.innerHTML = prompt("Adınız nedir:")



let myClock = document.querySelector("#myClock")


function showTime(){
      // Şu anki zamanı al
      var currentDate = new Date();
     // alert(currentDate);

      // Tarih ve saat bilgisini al
      var year = currentDate.getFullYear();
      var month = currentDate.getMonth();
      var day = currentDate.getDate(); 
      var hours = currentDate.getHours(); 
      var minutes = currentDate.getMinutes(); 
      var seconds = currentDate.getSeconds(); 
  
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

}


myClock.innerHTML=showTime();

