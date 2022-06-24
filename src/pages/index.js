import './index.css';
import { initialCards, validationConfig, formEdit, formAdd, 
    listContainer, profileEditBtn, cardAddBtn, inputName, inputAboutMe, profileAvatar } 
from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { data } from 'autoprefixer';

const formProfile = new FormValidator(validationConfig, formEdit);
const formCardAdd = new FormValidator(validationConfig, formAdd);
formProfile.enableValidation();
formCardAdd.enableValidation();

// const deleteCardHandler = (cardId) {
//     api.deleteCard(cardId)
//         .then((res) => {
            
//             popupEditProfile.close();
//         })
//         .catch(err => console.log(`${err}`));
// }                                               , deleteCardHandler

const popupWithImage = new PopupWithImage('.popup_card');

const createCard = (item) => {
    const card = new Card(item, '.template', () => popupWithImage.open(item));

    return card.generateCard();
}

const cardList = new Section ({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, listContainer)

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43/', 'b95d65c3-3fd9-4b99-9ec8-1daeaeb60353');

api.getCards()
    .then(cards => {
        const CardList = new Section({
            renderer: (item) => {
                const cardElement = createCard(item);
               
                CardList.addItem(cardElement);
            }
        }, listContainer);
        CardList.rendererItems(cards);
        
    })
    .catch(err => console.log(`${err}`));

const addCardHandler = ({ field_title: name, field_source: link }) => {
    api.addCard({ field_title: name, field_source: link })
        .then(data => {
            cardList.addItem(createCard(data));
            popupCardAdd.close();
        })
        .catch(err => console.log(`${err}`));
};

const popupCardAdd = new PopupWithForm('.popup_add-card',
    { submitHandler: addCardHandler });
    
const userInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle', avatar: '.profile__avatar' });
 
const popupEditProfile = new PopupWithForm('.popup_profile',
    { submitHandler: (userData) => {
        api.setUserInfo(userData)
            .then(res => {
                userInfo.setUserInfo({ name: res.name, about: res.about });
                popupEditProfile.close();
            })
            .catch(err => console.log(`Ошибка: ${err}`));
        }
    }
);

const handleOpenPopupProfile = () => {
    api.getUserInfo()
        .then(data => {
            userInfo.getUserInfo(data);
            inputName.value = data.name;
            inputAboutMe.value = data.about;
            formProfile.checkFormValidity();
            popupEditProfile.openPopup();
        })
        .catch(err => console.log(`Ошибка: ${err}`));
}

// const popupEditavatar = new PopupWithForm(

// )

Promise.all([api.getUserInfo(), api.getCards()])
    .then(([dataUserInfo, cards]) => {
        userInfo.setUserInfo(dataUserInfo);
        userInfo.setUserAvatar(dataUserInfo.avatar);
        userInfo.setUserId(dataUserInfo._id);
        cardList.rendererItems(cards);
    })


// const handleOpenPopupProfile = () => {
//     const { name: name, aboutMe: job } = userInfo.getUserInfo();
//     inputName.value = name;
//     inputAboutMe.value = job;
//     formProfile.checkFormValidity();
//     popupEditProfile.openPopup();
// };

profileEditBtn.addEventListener('click', handleOpenPopupProfile);
cardAddBtn.addEventListener('click', () => {
    formCardAdd.resetValidation();
    popupCardAdd.openPopup();
});
popupCardAdd.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();