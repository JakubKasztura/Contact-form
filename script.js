const FORM = document.querySelector(".form__body"),
  SUBMIT_BUTTON = document.querySelector(".form__submit");

function sendMessage(e) {
  e.preventDefault();
  const createdDataObject = createDataObj();
  console.log("clicked");
  console.log(createdDataObject);
}
function createDataObj() {
  const name = document.querySelector(".form__name").value,
    email = document.querySelector(".form__email").value,
    message = document.querySelector(".form__message").value;
  const dataObject = {
    name: name,
    email: email,
    message: message,
  };
  validateInputs(dataObject);
  return dataObject;
}
function validateInputs(dataObject) {
  for (const key in dataObject) {
    if (dataObject[key] === "") {
      alert(`Please set ${key} value`);
    } else if (key === "email") {
      if (!dataObject[key].includes("@")) {
        console.log("wrong email adress");
      }
    }
  }
}
SUBMIT_BUTTON.addEventListener("click", sendMessage);
