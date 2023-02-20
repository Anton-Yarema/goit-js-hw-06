const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormRefSubmit);

function onFormRefSubmit(e) {
  e.preventDefault();
  const password = e.currentTarget.elements.password.value;
  const email = e.currentTarget.elements.email.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    console.log(`email: ${email}, Password: ${password}`);
    e.currentTarget.reset();
  }
}
