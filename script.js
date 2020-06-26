const container = document.querySelector(".container");
let movie = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat");
const text = document.querySelector(".text");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
let ticketPrice = +movie.value;
function moviePrice() {
  return parseInt(movie.value);
}
movie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateCount();
});
function updateCount() {
  const seatSelected = document.querySelectorAll(".row .seat.selected");
  const Seatcount = seatSelected.length;
  count.innerText = Seatcount;
  total.innerText = Seatcount * ticketPrice;
}
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateCount();
  }
});
