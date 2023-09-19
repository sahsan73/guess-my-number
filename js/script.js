"use strict";

////////////////////////////////////////////////////////////////////
// Mobile Info icon
const infoMobileBtnEl = document.querySelector(".btn-mobile-info");
infoMobileBtnEl.addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("info-open");
  document.querySelector(".overlay").classList.toggle("hidden");
});
