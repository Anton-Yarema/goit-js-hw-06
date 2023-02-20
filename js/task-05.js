const inputRef = document.querySelector("#name-input");
console.log(inputRef);

let outputRef = document.querySelector("#name-output");
console.log(outputRef);

inputRef.addEventListener("input", (e) => {
  outputRef.textContent = `${inputRef.value}`;
});
