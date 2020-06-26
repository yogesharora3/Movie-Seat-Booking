const container = document.querySelector(".container");
let movie = document.querySelector("#movie");
const seats = document.querySelectorAll(".row .seat");
const text = document.querySelector(".text");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const select = document.querySelector("select");
let ticketPrice = +movie.value;

movie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  const seatSelected = document.querySelectorAll(".row .seat.selected");
  if (seatSelected !== null) {
    [...seatSelected].forEach((cur, index) => {
      cur.classList.remove("selected");
    });
    count.innerText = 0;
    total.innerText = 0;
  }
  updateUI();
});
function updateCount() {
  const seatSelected = document.querySelectorAll(".row .seat.selected");
  const Seatcount = seatSelected.length;
  count.innerText = Seatcount;
  total.innerText = Seatcount * ticketPrice;
  let seatArray = [...seatSelected].map((arr, index) => {
    return [...seats].indexOf(arr);
  });
  let KeyValue = select.options[select.selectedIndex].innerHTML;
  localStorage.setItem(KeyValue, JSON.stringify(seatArray));
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

function updateUI() {
  let KeyValue = select.options[select.selectedIndex].innerHTML;
  const seatArray = JSON.parse(localStorage.getItem(KeyValue));
  if (seatArray !== null && seatArray.length > 0) {
    seats.forEach((cur, index) => {
      if (seatArray.indexOf(index) > -1) {
        cur.classList.add("selected");
      }
    });
    count.innerText = seatArray.length;
    console.log(ticketPrice);
    total.innerText = seatArray.length * ticketPrice;
  }
}
window.addEventListener("DOMContentLoaded", updateUI);
