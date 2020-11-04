// ---Cart modal window


const cart = document.querySelector(".cart");
const fav = document.querySelector(".favorite");
const cartLinks = document.querySelectorAll(".products-buy-button");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const countCart = document.querySelector("#count-cart");
const countFav = document.querySelector("#count-favorites");
const favLinks = document.querySelectorAll(".products-fav-button");

cartLinks.forEach( (item) => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cart.classList.add("cart-fool");
    countCart.textContent = Number(countCart.textContent) + 1;
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

favLinks.forEach( (item) => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    fav.classList.add("favorite-add");
    countFav.textContent = Number(countFav.textContent) + 1;
  });
});
