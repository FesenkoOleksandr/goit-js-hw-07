import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
const galleryPic = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
    />
  </a>
</li>`
  )
  .join("");
ulEl.insertAdjacentHTML("beforeend", galleryPic);

let modalOption = {
  captionsData: "alt",
  captionSelector: "img",
  captionPosition: "bottom",
  captionDelay: 250,
};

const gallery = new SimpleLightbox(".gallery a", modalOption);
