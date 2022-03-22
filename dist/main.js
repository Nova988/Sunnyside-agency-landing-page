"use strict";

const hamburgerBtn = document.getElementById("hamburger_btn");
const hamburgerOverlay = document.querySelector(".hamburger__menu__overlay");
const hamburgerEl = document.querySelectorAll(".hamburger-el");
const images = document.querySelectorAll(".image");

// Media
const mediaMedium = window.matchMedia("(min-width: 600px)");

if (mediaMedium.matches) {
  images.forEach((img) => (img.src = img.src.replace("mobile", "desktop")));
}

const toggleHide = function () {
  hamburgerOverlay.classList.toggle("hide");
};

hamburgerBtn.addEventListener("click", toggleHide);

hamburgerEl.forEach((el) => {
  el.addEventListener("click", toggleHide);
});
