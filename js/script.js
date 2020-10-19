// ---Write-us modal window

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

  if (storageEmail) {
    writeUsEmail.value = storageName;
    writeUsText.focus();
  } else {
    writeUsEmail.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
  writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
  writeUsPopup.classList.add("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsEmail.value || !writeUsName.value) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-error");
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
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

// ---Map modal window

const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
