const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
console.log(inputRef);
console.log(textRef);

textRef.style.fontSize = inputRef.value + "px";
inputRef.addEventListener("input", (e) => {
  textRef.style.fontSize = inputRef.value + "px";
});
