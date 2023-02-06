const FORM = document.querySelector(".form__body"),
  SUBMIT_BUTTON = document.querySelector(".form__submit"),
  RED_COLOR = "hsl(0, 100%, 74%)",
  GRAY_BORDER = "hsla(0, 0%, 39%, 0.15)";

function sendMessage(e) {
  e.preventDefault();
  const createdDataObject = createDOMDataObj();
  if (createdDataObject.validationResult === true) {
    sendEmail();
  }
}
function createDOMDataObj() {
  const name = document.querySelector(".form__name"),
    email = document.querySelector(".form__email"),
    message = document.querySelector(".form__message");
  const dataObject = {
    userName: name,
    userEmail: email,
    userMessage: message,
  };

  validateInputs(dataObject);
  return dataObject;
}
function validateInputs(dataObject) {
  let validInputCounter = 0;
  let validEmail = false;

  for (const key in dataObject) {
    const keyLabel = dataObject[key].closest(
      ".form__input-container"
    ).nextElementSibling;
    const errorIcon = dataObject[key].nextElementSibling;

    if (dataObject[key].value === "" && key != "userEmail") {
      keyLabel.classList.remove("label--disabled");
      errorIcon.classList.remove("error-icon--disabled");
      dataObject[key].setAttribute("placeholder", "");
      dataObject[key].style.borderColor = RED_COLOR;
    } else if (!(dataObject[key].value === "")) {
      keyLabel.classList.add("label--disabled");
      errorIcon.classList.add("error-icon--disabled");
      dataObject[key].style.borderColor = GRAY_BORDER;
      validInputCounter++;
      console.log(validInputCounter);
    } else {
    }
    if (key === "userEmail") {
      console.log("email");
      dataObject[key].setAttribute("placeholder", "email@example/com");
      dataObject[key].classList.add("error");
      const atIndex = dataObject[key].value.indexOf("@");
      const msgAfterAt = dataObject[key].value.slice(atIndex + 1);
      const dotIndex = dataObject[key].value.indexOf(".");
      let msgAfterDot = dataObject[key].value.slice(dotIndex + 1);
      if (dotIndex === -1) {
        msgAfterDot = "";
      }
      if (
        !dataObject[key].value.includes("@") ||
        dataObject[key].value.startsWith("@") ||
        msgAfterAt.length <= 3 ||
        msgAfterDot.length <= 1
      ) {
        keyLabel.classList.remove("label--disabled");
        errorIcon.classList.remove("error-icon--disabled");
        dataObject[key].style.borderColor = RED_COLOR;
      } else {
        validEmail = true;
      }
    }
  }
  if (validInputCounter >= 3 && validEmail === true) {
    dataObject.validationResult = true;
  }
}
function sendEmail() {
  console.log("send emailing");
  FORM.submit();
}
SUBMIT_BUTTON.addEventListener("click", sendMessage);
