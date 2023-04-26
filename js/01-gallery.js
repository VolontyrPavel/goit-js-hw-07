import { galleryItems } from './gallery-items.js';
// Change code below this line

// консти
const container = document.querySelector('.gallery');
const cardImg = createGalleryCard (galleryItems);

container.insertAdjacentHTML('beforeend', cardImg);

// відключення поведінки за замовчуванням
container.addEventListener('click', e => {
    e.preventDefault();
    whenClickImg(e);
});

// функція створення розмітки
function createGalleryCard (galleryItems) {
    
    return galleryItems.map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `
    }).join('');
};

// функція перевірки на місклік та виклику модального вікна
function whenClickImg(e) {
    const checkingForMissClick = e.target.classList.contains('gallery__image');
    if(!checkingForMissClick) {
        return;
    }
    
    callModalWindow(e);
}

// створення модального вікна
function callModalWindow (e) {
    
    const modalWindow = basicLightbox.create(`<img src="${e.target.getAttribute('data-source')}" 
    width="800" height="600">`);
    modalWindow.show();

    document.addEventListener("keydown", e => {
        if (e.key === 'Escape') {
            modalWindow.close();
        }
    })
};

