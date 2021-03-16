const buttonBookmark= document.querySelector(".button-bookmark");
const popupOrder = document.querySelector(".modal-order");
const orderClose = popupOrder.querySelector(".modal-close");

buttonBookmark.addEventListener("click", function (evt) {
popupOrder.classList.add("modal-show");
});

orderClose.addEventListener("click", function (evt) {
  popupOrder.classList.remove("modal-show");
});
