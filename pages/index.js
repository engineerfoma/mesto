import Card from '../components/Card.js';
import { initialCards } from '../constants/cards.js';
import FormValidator from '../components/FormValidator.js';
import { validationConfig } from '../constants/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';

import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const formEdit = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');

const listContainer = document.querySelector('.list');

const profileEditBtn = document.querySelector('.profile__edit-button');

const cardAddBtn = document.querySelector('.profile__add-button');

const formProfile = new FormValidator(validationConfig, formEdit);
const formCardAdd = new FormValidator(validationConfig, formAdd);
formProfile.enableValidation();
formCardAdd.enableValidation();

const popupWithImage = new PopupWithImage('.popup_card');

const card = (item) => {
    const card = new Card(item, '.template', () => popupWithImage.open(item));

    return card.generateCard();
}

const handleDefaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = card(item);
       
        handleDefaultCardList.addItem(cardElement);
    }
}, listContainer);

const popupCardAdd = new PopupWithForm('.popup_add-card',
    { submitHandler: ({ field_title: name, field_source: link }) => {
        const newCard = card({ name, link });
        handleDefaultCardList.addItem(newCard);
        formProfile.checkFormValidity();
        popupCardAdd.close();
        }
    }
);

const userInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle' });

const popupEditProfile = new PopupWithForm('.popup_profile',
    { submitHandler: (data) => {
        userInfo.setUserInfo(data);
        popupEditProfile.close();
        }
    }
);

const handleOpenPopupProfile = () => {
    const { nameSelector: name, aboutMeSelector: job } = userInfo.getUserInfo();
    document.querySelector('.popup__input_type_name').value = name;
    document.querySelector('.popup__input_type_about-me').value = job;
    formProfile.checkFormValidity();
    popupEditProfile.openPopup();
};

handleDefaultCardList.rendererItems();
profileEditBtn.addEventListener('click', handleOpenPopupProfile);
cardAddBtn.addEventListener('click', () => {
    popupCardAdd.openPopup();
    formCardAdd.checkFormValidity();
});
popupCardAdd.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();