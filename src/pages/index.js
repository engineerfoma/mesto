import './index.css';
import { validationConfig, formEdit, formAdd, formAvatar,
    listContainer, profileEditBtn, cardAddBtn, inputName, inputAboutMe, profileAvatar } 
from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

const formProfile = new FormValidator(validationConfig, formEdit);
const formCardAdd = new FormValidator(validationConfig, formAdd);
const formAvatarEdit = new FormValidator(validationConfig, formAvatar);
formProfile.enableValidation();
formCardAdd.enableValidation();
formAvatarEdit.enableValidation();

const popupWithImage = new PopupWithImage('.popup_card');
const popupDeleteConfirm  = new PopupWithConfirmation('.popup_confirm');

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43/', 'b95d65c3-3fd9-4b99-9ec8-1daeaeb60353');

const userInfo = new UserInfo({ name: '.profile__title', job: '.profile__subtitle', avatar: '.profile__avatar' });

const cardList = new Section ({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, listContainer);

const createCard = (item) => {
    const card = new Card(
        item,
        '.template',
        () => popupWithImage.open(item),
        cardData => {
            popupDeleteConfirm.setSubmitAction(() => {
                api.deleteCard(cardData.getCardId())
                .then(() => {
                    cardData.removeElement();
                    popupDeleteConfirm.closePopup();
                })
                .catch(err => console.log(`Ошибка: ${err}`));
            });
            popupDeleteConfirm.openPopup();
        },
        cardData => {
            api.addLike(cardData)
                .then(res => {
                    card.likeAdd(res);
                })
                .catch(err => console.log(`Ошибка: ${err}`));
            },
        cardData => {
            api.deleteLike(cardData)
                .then(res => {
                    card.likeRemove(res);
                })
                .catch(err => console.log(`Ошибка: ${err}`));
        },
        userInfo.getUserId()
        );
        
    return card.generateCard();
}

const addCardHandler = ({ field_title: name, field_source: link }) => {
    popupCardAdd.isLoading(true, '.popup__save_card', 'Создать');
    api.addCard({ field_title: name, field_source: link })
    .then(data => {
        popupCardAdd.close();
        return cardList.addItem(createCard(data));
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
        popupCardAdd.isLoading(false, '.popup__save_card', 'Создать');
    })
};

const popupCardAdd = new PopupWithForm('.popup_add-card',
    { submitHandler: addCardHandler });

const popupEditProfile = new PopupWithForm('.popup_profile',
    { submitHandler: (userData) => {
        popupEditProfile.isLoading(true, '.popup__save_profile');
        api.setUserInfo(userData)
            .then(res => {
                userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
                popupEditProfile.close();
            })
            .catch(err => console.log(`Ошибка: ${err}`))
            .finally(() => {
                popupEditProfile.isLoading(false, '.popup__save_profile');
            })
        }
    }
);

const popupEditAvatar =  new PopupWithForm('.popup_avatar',
    {submitHandler: (link) => {
        popupEditAvatar.isLoading(true, '.popup__save_avatar');
        api.setAvatar(link.field_avatar)
            .then(res => {
                userInfo.setUserInfo(res);
                popupEditAvatar.close();
            })
            .catch(err => console.log(`Ошибка: ${err}`))
            .finally(() => {
                popupEditAvatar.isLoading(false, '.popup__save_avatar');
            })
    }
})

const handleOpenPopupProfile = () => {
    const data = userInfo.getUserInfo();
    inputName.value = data.name;
    inputAboutMe.value = data.aboutMe;
    formProfile.resetValidation();
    popupEditProfile.openPopup();
}

Promise.all([api.getUserInfo(), api.getCards()])
    .then(([dataUserInfo, cards]) => {
        userInfo.setUserInfo(dataUserInfo);
        userInfo.setUserId(dataUserInfo._id);
        cardList.rendererItems(cards);
    })
    .catch(err => console.log(`Ошибка: ${err}`));

profileAvatar.addEventListener('click', () => {
    formAvatarEdit.resetValidation();
    popupEditAvatar.openPopup();
});
profileEditBtn.addEventListener('click', handleOpenPopupProfile);
cardAddBtn.addEventListener('click', () => {
    formCardAdd.resetValidation();
    popupCardAdd.openPopup();
});

popupEditAvatar.setEventListeners();
popupCardAdd.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupDeleteConfirm.setEventListeners();