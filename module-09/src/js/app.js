'use strict';
import galleryItems from './gallery-items.js';
const gallery = document.querySelector('.gallery');
const item = createGallery(galleryItems);

function createGallery(items) {
  const field1 = items.map(el => el);
  const img1 = createItems(field1[0]);
  const img2 = createItems(field1[1]);
  const img3 = createItems(field1[2]);
  const img4 = createItems(field1[3]);
  const img5 = createItems(field1[4]);
  const img6 = createItems(field1[5]);
  const img7 = createItems(field1[6]);
  const img8 = createItems(field1[7]);
  const img9 = createItems(field1[8]);
  gallery.append(img1, img2, img3, img4, img5, img6, img7, img8, img9);
  return gallery;
}

function createItems(notes) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryItem.append(galleryLink);
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = notes.preview;
  galleryImage.alt = notes.description;
  galleryImage.dataset.source = notes.original;
  const galleryIcon = document.createElement('span');
  galleryIcon.classList.add('gallery__icon');
  galleryLink.append(galleryImage, galleryIcon);
  const icons = document.createElement('i');
  icons.classList.add('material-icons');
  icons.textContent = 'zoom_out_map';
  galleryIcon.append(icons);

  return galleryItem;
}

const lightBox = document.querySelector('.lightbox');
const overlay = document.querySelector('.lightbox__content');
const closeModalBtn = document.querySelector('.js-button');
const image = document.querySelector('.lightbox___image');

gallery.addEventListener('click', openImage);
closeModalBtn.addEventListener('click', closeImage);
overlay.addEventListener('click', handleOverlayClick);

function openImage(event) {
  lightBox.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);
  image.src = event.target.getAttribute('data-source');
}

function closeImage() {
  lightBox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
}
function handleOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeImage();
}
function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeImage();
}
