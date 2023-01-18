"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const show_modal = document.querySelectorAll(".show-modal");
const close_modal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", openModal);
}

close_modal.addEventListener("click", closemodal);

overlay.addEventListener("click", closemodal);
