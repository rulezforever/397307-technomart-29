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
    writeUsName.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsEmail.value || !writeUsName.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
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

// ---Slider services

const deliveryButton = document.querySelector(".button-delivery");
const guaranteeButton = document.querySelector(".button-guarantee");
const creditButton = document.querySelector(".button-credit");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");

deliveryButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliveryButton.classList.add("button-active");
  guaranteeButton.classList.remove("button-active");
  creditButton.classList.remove("button-active");
  item1.classList.add("services-description-current");
  item2.classList.remove("services-description-current");
  item3.classList.remove("services-description-current");
});

guaranteeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  guaranteeButton.classList.add("button-active");
  deliveryButton.classList.remove("button-active");
  creditButton.classList.remove("button-active");
  item2.classList.add("services-description-current");
  item1.classList.remove("services-description-current");
  item3.classList.remove("services-description-current");
});

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditButton.classList.add("button-active");
  guaranteeButton.classList.remove("button-active");
  deliveryButton.classList.remove("button-active");
  item3.classList.add("services-description-current");
  item1.classList.remove("services-description-current");
  item2.classList.remove("services-description-current");
});




// const sliderButtonLeft = document.querySelector(".slider-button-left");
// const slideOne = document.querySelector(".slide-one");
// const slideTwo = document.querySelector(".slide-two");
// const sliderPicture = document.querySelector(".slider");

// sliderButtonLeft.addEventListener("click", function (evt) {
//   evt.preventDefault();

//   if (sliderPicture.classList.contains("slide-perforator")) {
//     sliderPicture.classList.remove("slide-perforator");
//     sliderPicture.classList.add("slide-drill");
//     slideOne.classList.toggle("slide-current");
//     slideTwo.classList.add("slide-current");
//   }
//   // } else {
//   //   sliderPicture.classList.remove("slide-drill");
//   //   sliderPicture.classList.add("slide-perforator");
//   // }

//   // slide.classList.toggle("slide-current");
// });
