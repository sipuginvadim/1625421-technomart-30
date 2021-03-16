const writeUs = document.querySelector(".write-us");
const popup = document.querySelector(".modal-feedback");
const writeUsClose = popup.querySelector(".modal-close");
const userName = popup.querySelector("[name=user-name]");
const form = popup.querySelector("form");
const userEmail = popup.querySelector("[name=user-email]");
const feedbackForm = popup.querySelector(".feedback-form");

writeUs.addEventListener("click", function (evt) {
popup.classList.add("modal-show");
userName.focus();
});

writeUsClose.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
});




