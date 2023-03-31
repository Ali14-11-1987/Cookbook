"use strict";

const submitBtnEl = document.getElementById("alert");

submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  alert("That recipe is currently not available. Sorry :(");
});
