"use strict";
const tpcn_product = document.getElementById("product-container");
const menu_sorting = document.getElementById("sorted");
const tpcn_database = [
  {
    name: "Vitamin C",
    price: 7.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin D",
    price: 9.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin E",
    price: 71.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Vitamin F",
    price: 17.99,
    decription_0: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_2: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    decription_3: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];
//Load Products Function
function loadProduct(section, sort, start, end) {
  for (start; start <= end; start++) {
    const div = document.createElement("div");
    div.classList.add("col-product", `${sort}`);
    div.innerHTML = `
    <img src="./img-product/product--${start}.jpg" alt="">
    <h4>${tpcn_database[start].name}</h4>
    <p>${tpcn_database[start].price} VND</p>
    <a id= "${start}" class="details" href="#pop-up">Chi tiết</a>`;

    section.appendChild(div);
  }
}

//Product Sorting
const label = document.getElementById("label");
function productSorting(class_name) {
  var col_product = document.querySelectorAll(".col-product");
  for (let i = 0; i < col_product.length; i++) {
    if (col_product[i].classList.contains(class_name)) {
      col_product[i].style.display = "flex";
    } else {
      col_product[i].style.display = "none";
    }
  }
}

menu_sorting.addEventListener("change", () => {
  if (menu_sorting.value == "all") {
    const allProduct = document.querySelectorAll(".col-product");
    allProduct.forEach((element) => {
      element.style.display = "flex";
      label.textContent = "Tất Cả Các Sản Phẩm";
    });
  } else if (menu_sorting.value == "vitamin") {
    productSorting("vitamin");
    label.textContent = "Các Loại Vitamin";
  } else if (menu_sorting.value == "glucosamine") {
    productSorting("glucosamine");
    label.textContent = "Glucosamine";
  } else if (menu_sorting.value == "omega3") {
    productSorting("omega3");
    label.textContent = "Dầu Cá - Omega 3";
  }
});

loadProduct(tpcn_product, "vitamin", 0, 5);
loadProduct(tpcn_product, "glucosamine", 6, 9);
loadProduct(tpcn_product, "omega3", 10, 13);

//Popup Window
const details = document.querySelectorAll(".details");
const popup = document.getElementById("pop-up");
const closed = document.getElementById("closed");
window.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    popup.style.display = "none";
  }
});
closed.addEventListener("click", () => {
  popup.style.display = "none";
});
details.forEach((element) => {
  element.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

//Display Info
const big_img = document.querySelector(".big-img");
const sml_img = document.querySelectorAll(".sml-img");
const product_name = document.querySelector(".product-name");
const product_price = document.querySelector(".price");
const product_text = document.querySelectorAll(".product_text");
details.forEach((element) => {
  element.addEventListener("click", () => {
    let i = Number(element.id);
    big_img.src = `/img-product/product--${i}.jpg`;
    sml_img[0].src = `/img-product/product--${i + 1}.jpg`;
    sml_img[1].src = `/img-product/product--${i + 2}.jpg`;
    sml_img[2].src = `/img-product/product--${i + 3}.jpg`;

    product_name.textContent = tpcn_database[i].name;
    product_price.textContent = tpcn_database[i].price;
    product_text[0].textContent = tpcn_database[i].decription_0;
    product_text[1].textContent = tpcn_database[i].decription_1;
    product_text[2].textContent = tpcn_database[i].decription_2;
  });
});
// Slide sml-img

console.log(sml_img);
function slide_img() {
  for (let i = 0; i < sml_img.length; i++) {
    sml_img[i].addEventListener("click", () => {
      big_img.src = sml_img[i].src;
    });
  }
}
slide_img();
