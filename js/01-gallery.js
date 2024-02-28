import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');

function renderGalleryItems(items) {
    const galleryMarkup = items.map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `).join('');

    
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  }

     function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    instance.show();
  }

    galleryContainer.addEventListener('click', openModal);
    
     renderGalleryItems(galleryItems);
});