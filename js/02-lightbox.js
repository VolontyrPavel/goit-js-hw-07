import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// консти
const container = document.querySelector('.gallery');
const cardImg = createGalleryCard (galleryItems);

container.insertAdjacentHTML('beforeend', cardImg);

// функція створення розмітки
function createGalleryCard (galleryItems) {
    
    return galleryItems.map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
        `
    }).join('');
};
    
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

