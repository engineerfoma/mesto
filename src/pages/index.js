import './index.css';
import { initialCards, validationConfig, formEdit, formAdd, 
    listContainer, profileEditBtn, cardAddBtn, inputName, inputAboutMe } 
from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const formProfile = new FormValidator(validationConfig, formEdit);
const formCardAdd = new FormValidator(validationConfig, formAdd);
formProfile.enableValidation();
formCardAdd.enableValidation();

const popupWithImage = new PopupWithImage('.popup_card');

const createCard = (item) => {
    const card = new Card(item, '.template', () => popupWithImage.open(item));

    return card.generateCard();
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43/', 'b95d65c3-3fd9-4b99-9ec8-1daeaeb60353');
    
api.getCards()
    .then((cards) => {
        const DefaultCardList = new Section({
            items: cards,
            renderer: (item) => {
                const cardElement = createCard(item);
               
                DefaultCardList.addItem(cardElement);
            }
        }, listContainer);
        DefaultCardList.rendererItems();
    })
    .catch(err => console.log(err));

// const DefaultCardList = new Section({
//     items: initialCards,
//     renderer: (item) => {
//         const cardElement = createCard(item);
       
//         DefaultCardList.addItem(cardElement);
//     }
// }, listContainer);

// const popupCardAdd = new PopupWithForm('.popup_add-card',
//     { submitHandler: ({ field_title: name, field_source: link }) => {
//         const newCard = createCard({ name, link });
//         DefaultCardList.addItem(newCard);
//         popupCardAdd.close();
//         }
//     }
// );

const addCardHandler = ({ field_title: name, field_source: link }) => {
    
    api.addCard({ field_title: name, field_source: link });
    popupCardAdd.close();
};

const popupCardAdd = new PopupWithForm('.popup_add-card',
    { submitHandler: addCardHandler }
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
    const { name: name, aboutMe: job } = userInfo.getUserInfo();
    inputName.value = name;
    inputAboutMe.value = job;
    formProfile.checkFormValidity();
    popupEditProfile.openPopup();
};

// DefaultCardList.rendererItems();

profileEditBtn.addEventListener('click', handleOpenPopupProfile);
cardAddBtn.addEventListener('click', () => {
    formCardAdd.resetValidation();
    popupCardAdd.openPopup();
});
popupCardAdd.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();