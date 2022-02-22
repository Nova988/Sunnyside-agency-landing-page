"use strict";

const hamburgerBtn = document.getElementById("hamburger_btn");
const hamburgerOverlay = document.querySelector(".hamburger__menu__overlay");
const hamburgerEl = document.querySelectorAll(".hamburger-el");

const toggleHide = function () {
  hamburgerOverlay.classList.toggle("hide");
};

hamburgerBtn.addEventListener("click", toggleHide);

hamburgerEl.forEach((el) => {
  el.addEventListener("click", toggleHide);
});
