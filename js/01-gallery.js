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
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`
  )
  .join("");
ulEl.insertAdjacentHTML("beforeend", galleryPic);

const openLargeImg = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalInstance = basicLightbox.create(`<div class="modal">
    <img
      src="${event.target.dataset.source}"/>
    </div>`);
  modalInstance.show();


  function closeModalWindow (event) {
    if (event.code === 'Escape') {
      modalInstance.close();
      window.removeEventListener("keydown", closeModalWindow)
    }

  }
  window.addEventListener("keydown", closeModalWindow)
};
ulEl.addEventListener("click", openLargeImg);
