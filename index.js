"use strict";

const inputEl = document.querySelector(".input");
const body = document.querySelector("body");
const text = document.querySelector(".text");

console.log(inputEl.checked);
const updateBody = function () {
  if (inputEl.checked) {
    body.style.backgroundColor = "black";
    text.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    text.style.color = "black";
  }
};

inputEl.addEventListener("click", () => {
  updateBody();
});
