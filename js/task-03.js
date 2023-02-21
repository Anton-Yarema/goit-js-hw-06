const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeTranzactionMarkUp = (tranzaction) => {
  const { url, alt } = tranzaction;
  return `
  <li>
  <img src=${url} alt="${alt}" width="320">
  </li>  
  `;
};
const ulRef = document.querySelector(".gallery");
const makeImagesRowMarkUp = images.map(makeTranzactionMarkUp).join(" ");

ulRef.insertAdjacentHTML("afterbegin", makeImagesRowMarkUp);

// const listRef = images.map(({ url, alt }) => {
//   const galleryItemRef = document.createElement("li");
//   ulRef.append(galleryItemRef);
//   galleryItemRef.insertAdjacentHTML(
//     "beforeend",
//     `<img src=${url} alt="${alt}" width="320">`
//   );
//   return galleryItemRef;
// });

// ulRef.append(...listRef);
// console.log(ulRef);
