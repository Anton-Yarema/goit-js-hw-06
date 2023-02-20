let counterValue = 0;
const counterValueRef = document.querySelector("#value");
console.log(counterValueRef.textContent);

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementref = document.querySelector('[data-action="increment"]');
console.log(btnDecrementRef);
console.log(btnIncrementref);

btnDecrementRef.addEventListener("click", onButtonDecrementClick);
btnIncrementref.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  console.log(counterValue);
  counterValueRef.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  console.log(counterValue);
  counterValueRef.textContent = counterValue;
}
