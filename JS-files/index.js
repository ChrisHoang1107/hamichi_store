"use strict";
const fb_review1 = document.querySelector(".fb-review1");
const fb_review2 = document.querySelector(".fb-review2");
const fb_review3 = document.querySelector(".fb-review3");
console.log(fb_review1, fb_review2, fb_review3);
let x = 0;

function reviewIMG1() {
  fb_review1.src = `/img-reviews/product--${x}.jpg`;
  if (x < 4) {
    x++;
  } else {
    x = 0;
  }
  setTimeout("reviewIMG1()", 2000);
}
function reviewIMG2() {
  fb_review2.src = `/img-reviews/product--${x}.jpg`;
  if (x < 4) {
    x++;
  } else {
    x = 0;
  }
  setTimeout("reviewIMG2()", 4000);
}
function reviewIMG3() {
  fb_review3.src = `/img-reviews/product--${x}.jpg`;
  if (x < 4) {
    x++;
  } else {
    x = 0;
  }
  setTimeout("reviewIMG3()", 6000);
}

reviewIMG1();
reviewIMG2();
reviewIMG3();
