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
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
      console.log(name);
      console.log(value);
    });
    console.log(formData);

    e.currentTarget.reset();
  }
}
