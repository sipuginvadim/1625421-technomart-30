const buttons = document.querySelectorAll(".button-bookmark");
const popUp = document.querySelector(".modal-order");
const closeButton = popUp.querySelector(".modal-close");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    popUp.classList.add("modal-show");
  });
}

closeButton.addEventListener("click", function (evt) {
  popUp.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popUp.classList.contains("modal-show")) {
      evt.preventDefault();
      popUp.classList.remove("modal-show");
    }
  }
});
