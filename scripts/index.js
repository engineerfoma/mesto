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

const modalWindowProfile = document.querySelector('.popup__place_profile');
const modalWindowCardAdd = document.querySelector('.popup__place_add-card');
const modalWindowCard = document.querySelector('.popup__place_card');
const profileEditBtn = document.querySelector('.profile__edit-button');
const cardAddBtn = document.querySelector('.profile__add-button');
const profileCloseBtn = document.querySelector('.popup__close_profile');
const cardAddedCloseBtn = document.querySelector('.popup__close_added-card');
const cardCloseBtn = document.querySelector('.popup__close_card');
const card = document.querySelector('.popup__content_place_card');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameInput = form.querySelector('.popup__field_type_name');
const aboutMeInput = form.querySelector('.popup__field_type_about-me');
const popupSave = form.querySelector('.popup__save');

const render = () => {
    const html = initialCards.map(getElement);
    listContainer.prepend(...html);
}

const getElement = item => {
    const newItem = template.content.cloneNode(true);
    const image = newItem.querySelector('.list-element__picture');
    const title = newItem.querySelector('.list-element__title');

    title.textContent = item.name;
    image.src = item.link;
    image.alt = item.name;
    image.addEventListener('click', () => {
    const modalWindowCard = document.querySelector('.popup__place_card');
        toggleModalWindow(modalWindowCard);
        card.src = item.link;
        card.alt = item.name;
    });
    return newItem;
}

const toggleModalWindow = popupName => {
    if (popupName.classList.contains('popup_opened') === true) {
        popupName.classList.toggle('popup_opened');
    } else {
        popupName.classList.toggle('popup_opened');
        nameInput.value = profileTitle.textContent;
        aboutMeInput.value = profileSubtitle.textContent;
    }
}

const handlePopupProfile = () => toggleModalWindow(modalWindowProfile);
const handlePopupAddedCard = () => toggleModalWindow(modalWindowCardAdd);
const handlePopupCard = () => toggleModalWindow(modalWindowCard);

const onSubmit = event => {
    toggleModalWindow();
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutMeInput.value;
}

profileEditBtn.addEventListener('click', handlePopupProfile);
profileCloseBtn.addEventListener('click', handlePopupProfile);
cardAddBtn.addEventListener('click', handlePopupAddedCard);
cardAddedCloseBtn.addEventListener('click', handlePopupAddedCard);
// card.addEventListener('click', handlePopupCard);
cardCloseBtn.addEventListener('click', handlePopupCard);
form.addEventListener('submit', onSubmit);

render();