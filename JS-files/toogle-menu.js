//----Toggle Menu----
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
menuToggle.addEventListener("click", () => {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "500px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
});
