const ulRef = document.querySelectorAll(".item");

console.log("Number of categories:", ulRef.length);

ulRef.forEach((elem) => {
  console.log("Category:", elem.querySelector("h2").textContent);
  console.log("Elements:", elem.querySelectorAll("li").length);
});
