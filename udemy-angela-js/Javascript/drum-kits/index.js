let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    /* console.log(this.innerHTML);
    this.style.color = "white";
*/
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  console.log(event);
  makeSound(event.key);
  // alert("Key was pressed!!");
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-2.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-2.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
  }
}
