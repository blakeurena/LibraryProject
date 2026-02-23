const menuOpenBtn = document.querySelector(".btn__menu");
const menuCloseBtn = document.querySelector(".btn__menu--close");

menuOpenBtn.addEventListener("click", () => {
  document.body.classList.add("menu--open");
});

menuCloseBtn.addEventListener("click", () => {
  document.body.classList.remove("menu--open");
});