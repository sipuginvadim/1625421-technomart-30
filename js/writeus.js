const writeUs = document.querySelector(".write-us");
const popup = document.querySelector(".modal-feedback");
const writeUsClose = popup.querySelector(".modal-close");
const userName = popup.querySelector("[name=user-name]");

writeUs.addEventListener("click", function (evt) {
  popup.classList.add("modal-show");
  userName.focus();
});

writeUsClose.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
