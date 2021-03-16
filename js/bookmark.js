const buttonBookmark = document.querySelector(".button-bookmark");
const popupOrder = document.querySelector(".modal-order");
const orderClose = popupOrder.querySelector(".modal-close");

buttonBookmark.addEventListener("click", function (evt) {
  popupOrder.classList.add("modal-show");
});

orderClose.addEventListener("click", function (evt) {
  popupOrder.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupOrder.classList.contains("modal-show")) {
      evt.preventDefault();
      popupOrder.classList.remove("modal-show");
    }
  }
});
