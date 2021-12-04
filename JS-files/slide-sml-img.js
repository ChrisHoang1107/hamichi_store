"use strict";
const sml_img = document.querySelectorAll(".sml-img");
const big_img = document.querySelector(".big-img");

console.log(sml_img);

for (let i = 0; i < sml_img.length; i++) {
  sml_img[i].addEventListener("click", () => {
    big_img.src = sml_img[i].src;
    sml_img[i].classList.add("active");
  });
}
