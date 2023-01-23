const FORM = document.querySelector(".form__body"),
  SUBMIT_BUTTON = document.querySelector(".form__submit");
const name = document.querySelector(".form__name"),
  email = document.querySelector(".form__email"),
  message = document.querySelector(".form__message"),
  labels = document.querySelectorAll("label");
// change to CAPTIONS NAME etc

function sendMessage(e) {
  e.preventDefault();

  const createdDataObject = createDOMDataObj();
  console.log("clicked");
  console.log(createdDataObject);
}
function createDOMDataObj() {
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
    if (dataObject[key].value === "") {
      console.log("wrong");
      for (const label of labels) {
        label.classList.toggle("label--disabled");
      }
    }
    if (key === "email") {
      if (!dataObject[key].includes("@")) {
        console.log("wrong email adress");
      }
    }
  }
  // create another object for only values loop it
}
SUBMIT_BUTTON.addEventListener("click", sendMessage);
