import { Card } from './card.js';
import { initialCards } from './cards.js';
import { FormValidator } from './validate.js';
import { validationConfig } from './utils.js';

const listContainer = document.querySelector('.list');

const modalWindowProfile = document.querySelector('.popup_profile');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close_profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const modalWindowCardAdd = document.querySelector('.popup_add-card');
const cardAddBtn = document.querySelector('.profile__add-button');
const cardAddedCloseBtn = document.querySelector('.popup__close_added-card');

const modalWindowCard = document.querySelector('.popup_card');
const cardCloseBtn = document.querySelector('.popup__close_card');
const card = document.querySelector('.popup__content_place');

const formEdit = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const aboutMeInput = formEdit.querySelector('.popup__input_type_about-me');
const popupSaveDisabled = formEdit.querySelector('.popup__save_profile');

const popupSaveCard = document.querySelector('.popup__save_card');
const cardTitle = card.querySelector('.popup__title_card');
const cardPictures = card.querySelector('.popup__img');

const formAddTitleInputField = formAdd.querySelector('.popup__input_title');
const formAddSourceInputField = formAdd.querySelector('.popup__input_source'); 

const handleSaveCardTemplate = (name, link) => {
    cardTitle.textContent = name;
    cardPictures.src = link;
    cardPictures.alt = name;
    openPopup(modalWindowCard);
}

const formProfile = new FormValidator(validationConfig, formEdit);
const formCardAdd = new FormValidator(validationConfig, formAdd);
formProfile.enableValidation();
formCardAdd.enableValidation();

initialCards.forEach(item => {
    const card = new Card(item, '.template', () => {
        handleSaveCardTemplate(item.name, item.link);
    });

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

    const objInputSaveCard = { 
        name: formAddTitleInputField.value, 
        link: formAddSourceInputField.value 
    };

    const card = new Card(objInputSaveCard, '.template', () => {
        handleSaveCardTemplate(objInputSaveCard.name, objInputSaveCard.link);
    });

    const cardElement = card.generateCard();

    listContainer.prepend(cardElement);

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