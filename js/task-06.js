const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (e) => {
  //    event.currentTarget.value.length
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    validRef();
  } else {
    inValidRef();
  }
});

function validRef() {
  inputRef.classList.add("valid");
  inputRef.classList.remove("invalid");
}

function inValidRef() {
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
}
