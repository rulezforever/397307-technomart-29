const writeUsLink = document.querySelector(".information-contacts-button");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const writeUsName = writeUsPopup.querySelector(".login-name");
const writeUsEmail = writeUsPopup.querySelector(".login-mail");
const writeUsText = writeUsPopup.querySelector(".login-text");

const isStorageSupport = true;
const storageName = "";
const storageEmail="";

try {
  storage = localStorage.getItem("Name");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storageName) {
    writeUsName.value = storageName;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsEmail || !writeUsName) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem("Name", writeUsName.value);
    localStorage.setItem("Email", writeUsEmail.value);
    }

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
    }
  }
});
