const map = document.querySelector(".mini-map");
const popupMap = document.querySelector(".modal-map");
const mapClose = popupMap.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
  popupMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
    }
  }
});
