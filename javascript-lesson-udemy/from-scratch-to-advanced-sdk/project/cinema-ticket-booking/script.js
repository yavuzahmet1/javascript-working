const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const selectMovie = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

selectMovie.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  let selectedSeats = container.querySelectorAll(".seat.selected");

  const selectedSeatArr = [];
  const seatArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatArr.push(seat);
  });

  seats.forEach(function (seat) {
    seatArr.push(seat);
  });

  let selectedSeatIndex = selectedSeatArr.map(function (seat) {
    return seatArr.indexOf(seat);
  });
  console.log(selectedSeatIndex);

  let selectedSeatCount = selectedSeats.length;
  amount.innerText = selectedSeatCount * selectMovie.value;
  count.innerText = selectedSeatCount;

  saveToLocalStorge(selectedSeatIndex);
}

function saveToLocalStorge(index) {
  localStorage.setItem("selectedSeats", JSON.stringify(index));
  localStorage.setItem("selectedMovieIndex", selectMovie.selectedIndex);
}
