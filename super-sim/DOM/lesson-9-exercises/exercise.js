function secondBtnChange() {
  document.querySelector(".btnb").innerHTML = "9b done";
  console.log("Changed");
}

function chosed(event) {
  document.querySelector("p").innerHTML = `You chose : ${event}`;
}
