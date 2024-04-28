let greeting = document.querySelector("#info");
greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("tıklandı");
  console.log((this.innerHTML = "Tıkladığımda içeriği değişti"));
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}
