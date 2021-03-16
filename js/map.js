const map = document.querySelector(".mini-map");
const popupMap = document.querySelector(".modal-map");
const mapClose = popupMap.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
popupMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  popupMap.classList.remove("modal-show");
});

