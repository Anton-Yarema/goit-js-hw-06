const inputRef = document.querySelector("#name-input");
console.log(inputRef);

let outputRef = document.querySelector("#name-output");
console.log(outputRef);

inputRef.addEventListener("input", (e) => {
  if (inputRef.value) {
    outputRef.textContent = `${inputRef.value}`;
  } else {
    outputRef.textContent = "Anonymous";
  }
});
