const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.createElement("ul");

const listRef = ingredients.map((name) => {
  const liRef = document.createElement("li");
  liRef.textContent = name;
  return liRef;
});

ulRef.append(...listRef);

document.body.append(ulRef);

console.log(listRef);
