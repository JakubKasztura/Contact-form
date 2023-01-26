const FORM = document.querySelector(".form__body"),
  SUBMIT_BUTTON = document.querySelector(".form__submit");
const labels = document.querySelectorAll("label"),
  error_icon = document.querySelector(".form__error-icon"),
  redColor = "hsl(0, 100%, 74%)",
  grayBorder = "hsla(0, 0%, 39%, 0.15)";
// change to CAPTIONS NAME etc

function sendMessage(e) {
  e.preventDefault();

  const createdDataObject = createDOMDataObj();
  console.log("clicked");
  console.log(createdDataObject);
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
  for (const key in dataObject) {
    const keyLabel = dataObject[key].closest(
      ".form__input-container"
    ).nextElementSibling;
    const errorIcon = dataObject[key].nextElementSibling;
    console.log(dataObject[key]);

    if (dataObject[key].value === "") {
      console.log(keyLabel);
      keyLabel.classList.remove("label--disabled");
      errorIcon.classList.remove("error-icon--disabled");
      dataObject[key].style.borderColor = redColor;
    } else if (!(dataObject[key].value === "")) {
      keyLabel.classList.add("label--disabled");
      errorIcon.classList.add("error-icon--disabled");
      dataObject[key].style.borderColor = grayBorder;
    }
    if (key === "userEmail") {
      console.log("email");
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
        dataObject[key].style.borderColor = redColor;
      }
    }
    // create another object for only values loop it
  }
}
SUBMIT_BUTTON.addEventListener("click", sendMessage);
