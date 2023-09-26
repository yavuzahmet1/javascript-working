console.log(document.location.pathname);
document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";
document.getElementById("btnClick").addEventListener("click", clicked);
function clicked() {
  alert("Butona Tıklandı");
}
