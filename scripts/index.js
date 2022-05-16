import {Card, initialCards} from './cards.js';

const listContainer = document.querySelector('.list');
const template = document.querySelector('.template');

const modalWindowProfile = document.querySelector('.popup_profile');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close_profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const modalWindowCardAdd = document.querySelector('.popup_add-card');
const cardAddBtn = document.querySelector('.profile__add-button');
const cardAddedCloseBtn = document.querySelector('.popup__close_added-card');

export const modalWindowCard = document.querySelector('.popup_card');
const cardCloseBtn = document.querySelector('.popup__close_card');
const card = document.querySelector('.popup__content_place');

const formEdit = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const aboutMeInput = formEdit.querySelector('.popup__input_type_about-me');
const popupSave = formEdit.querySelector('.popup__save');
const popupSaveDisabled = formEdit.querySelector('.popup__save_profile');

const popupSaveCard = document.querySelector('.popup__save_card');
const cardTitle = card.querySelector('.popup__title_card');
const cardPictures = card.querySelector('.popup__img');

const formAddTitleInputField = formAdd.querySelector('.popup__input_title');
const formAddSourceInputField = formAdd.querySelector('.popup__input_source'); 


const ivo = () => {
    cardTitle.textContent = card.name;
    cardPictures.src = card.link;
    cardPictures.alt = card.name;
    openPopup(modalWindowCard);
};
// const renderCard = () => {
//     const cards = initialCards.map(getElement);
//     listContainer.prepend(...cards);
// };

// const getElement = item => {
//     const newItem = template.content.cloneNode(true);
//     const image = newItem.querySelector('.list-element__picture');
//     const title = newItem.querySelector('.list-element__title');
//     const likeBtn = newItem.querySelector('.list-element__like');
//     const trash = newItem.querySelector('.list-element__trash');

//     title.textContent = item.name;
//     image.src = item.link;
//     image.alt = item.name;

//     image.addEventListener('click', () => {
//         cardTitle.textContent = item.name;
//         cardPictures.src = item.link;
//         cardPictures.alt = item.name;

//         openPopup(modalWindowCard);
//     });

//     likeBtn.addEventListener('click', getLike);
//     trash.addEventListener('click', removeCard);

//     return newItem;
// };

// const getLike = event => {
//     event.target.classList.toggle('list-element__like_active');
// };

// const removeCard = event => {
//     const element = event.target.closest('.list-element');
//     element.remove();
// };

initialCards.forEach(item => {
    const card = new Card(item, '.template', ivo);
    const cardElement = card.generateCard();
    
    document.querySelector('.list').append(cardElement);
});

const onEscPress = (event) => {
    if (event.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
};

const onOverlayClick = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.addEventListener('click', event => {
            if (event.target === event.currentTarget) {
                closePopup(popup);
            };
        });
    });
};

const openPopup = (popupName) => {
    popupName.classList.add('popup_opened');
    document.addEventListener('keydown', onEscPress);
};

const closePopup = (popupName) => {
    popupName.classList.remove('popup_opened');
    document.removeEventListener('keydown', onEscPress);
};

const handlePopupProfile = () => {
    nameInput.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
    popupSaveDisabled.disabled = false;
    popupSaveDisabled.classList.remove('popup__save_disabled');
    openPopup(modalWindowProfile);
};

const handlePopupProfileClose = () => closePopup(modalWindowProfile);

const handlePopupAddedCard = () => openPopup(modalWindowCardAdd);

const handlePopupAddedClose = () => closePopup(modalWindowCardAdd);

const handlePopupCardClose = () => closePopup(modalWindowCard);

const handleProfileFormSubmit = event => { 
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutMeInput.value;
    handlePopupProfileClose();
};

const handleSaveCard = event => {
    event.preventDefault();
    const element = getElement({ name: formAddTitleInputField.value, link: formAddSourceInputField.value });
    listContainer.prepend(element);
    handlePopupAddedClose();
    formAdd.reset();
    popupSaveCard.disabled = true;
    popupSaveCard.classList.add('popup__save_disabled');
};

profileEditBtn.addEventListener('click', handlePopupProfile);
profileCloseBtn.addEventListener('click', handlePopupProfileClose);

cardAddBtn.addEventListener('click', handlePopupAddedCard);
cardAddedCloseBtn.addEventListener('click', handlePopupAddedClose);

cardCloseBtn.addEventListener('click', handlePopupCardClose);

formAdd.addEventListener('submit', handleSaveCard);
formEdit.addEventListener('submit', handleProfileFormSubmit);

onOverlayClick();

// renderCard();