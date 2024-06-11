function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerText = "Subscribed";
    buttonElement.classList.add("is-subscribed");
    buttonElement.classList.remove("is-subscribe");
  } else {
    buttonElement.innerText = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
    buttonElement.classList.add("is-subscribe");
  }
}

function calculate() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  if (cost < 40) {
    document.querySelector(".result").innerHTML = `$${cost + 10}`;
  } else {
    document.querySelector(".result").innerHTML = `$${cost}`;
  }
}

function handleCostCalculate(event) {
  if (event.key === "Enter") {
    calculate();
  }
}
