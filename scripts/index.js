const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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

const modalWindowCard = document.querySelector('.popup_card');
const cardCloseBtn = document.querySelector('.popup__close_card');
const card = document.querySelector('.popup__content_place');

const formEdit = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const aboutMeInput = formEdit.querySelector('.popup__input_type_about-me');
const popupSave = formEdit.querySelector('.popup__save');
const popupSaveCard = document.querySelector('.popup__save_card');

const cardPictures = card.querySelector('.popup__img');
const cardTitle = card.querySelector('.popup__title_card');

const formAddTitleInputField = formAdd.querySelector('.popup__input_title');
const formAddSourceInputField = formAdd.querySelector('.popup__input_source'); 

const render = () => {
    const html = initialCards.map(getElement);
    listContainer.prepend(...html);
};

const getElement = item => {
    const newItem = template.content.cloneNode(true);
    const image = newItem.querySelector('.list-element__picture');
    const title = newItem.querySelector('.list-element__title');
    const likeBtn = newItem.querySelector('.list-element__like');
    const trash = newItem.querySelector('.list-element__trash');
    

    title.textContent = item.name;
    image.src = item.link;
    image.alt = item.name;

    image.addEventListener('click', () => {
        cardTitle.textContent = item.name;
        cardPictures.src = item.link;
        cardPictures.alt = item.name;

        openPopup(modalWindowCard);
    });

    likeBtn.addEventListener('click', getLike);
    trash.addEventListener('click', removeCard);

    return newItem;
};

const getLike = event => {
    const element = event.target.closest('.list-element__like');
    element.classList.toggle('list-element__like_active');
};

const removeCard = event => {
    const element = event.target.closest('.list-element');
    element.remove();
};

const openPopup = (popupName) => popupName.classList.add('popup_opened');
const closePopup = (popupName) => popupName.classList.remove('popup_opened');

const handlePopupProfile = () => {
    nameInput.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;

    openPopup(modalWindowProfile);
};

const handlePopupProfileClose = () => closePopup(modalWindowProfile);

const handlePopupAddedCard = () => openPopup(modalWindowCardAdd);

const handlePopupAddedClose = () => closePopup(modalWindowCardAdd);

const handlePopupCardClose = () => closePopup(modalWindowCard);

const onSubmit = event => { 
    // event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutMeInput.value;
    handlePopupProfileClose();
};

const handleSaveCard = event => {
    // event.preventDefault();
    const element = getElement({ name: formAddTitleInputField.value, link: formAddSourceInputField.value });
    listContainer.prepend(element);
    handlePopupAddedClose();
    formAdd.reset();
};

profileEditBtn.addEventListener('click', handlePopupProfile);
profileCloseBtn.addEventListener('click', handlePopupProfileClose);

cardAddBtn.addEventListener('click', handlePopupAddedCard);
cardAddedCloseBtn.addEventListener('click', handlePopupAddedClose);

cardCloseBtn.addEventListener('click', handlePopupCardClose);

formAdd.addEventListener('submit', handleSaveCard);
formEdit.addEventListener('submit', onSubmit);

render();