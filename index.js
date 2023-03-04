let rating1El = document.getElementById("rating-1");
let rating2El = document.getElementById("rating-2");
let rating3El = document.getElementById("rating-3");
let rating4El = document.getElementById("rating-4");
let rating5El = document.getElementById("rating-5");
let formEl = document.getElementById("form");
let replaceEl = document.getElementById("replace");
let rating = 0;

let pointsEl = document.getElementById("points");

function getRating1() {
  removeBgColor();
  rating = 1;
  pointsEl.innerText = "You selected " + rating + " out of 5";
  rating1El.classList.add("selected");
}
function getRating2() {
  removeBgColor();
  rating = 2;
  pointsEl.innerText = "You selected " + rating + " out of 5";
  rating2El.classList.add("selected");
}
function getRating3() {
  removeBgColor();
  rating = 3;
  pointsEl.innerText = "You selected " + rating + " out of 5";
  rating3El.classList.add("selected");
}

function getRating4() {
  removeBgColor();
  rating = 4;
  pointsEl.innerText = "You selected " + rating + " out of 5";
  rating4El.classList.add("selected");
}

function getRating5() {
  removeBgColor();
  rating = 5;
  pointsEl.innerText = "You selected " + rating + " out of 5";
  rating5El.classList.add("selected");
}

function removeBgColor() {
  rating1El.classList.remove("selected");
  rating2El.classList.remove("selected");
  rating3El.classList.remove("selected");
  rating4El.classList.remove("selected");
  rating5El.classList.remove("selected");
}

function getForm() {
  if (rating === 0) {
    return alert("You did not click a number");
  } else {
    formEl.classList.add("hidden");
    replaceEl.classList.remove("hidden");
  }
}
