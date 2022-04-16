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
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileCloseBtn = document.querySelector('.popup__close_profile');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const modalWindowCardAdd = document.querySelector('.popup__place_add-card');
const cardAddBtn = document.querySelector('.profile__add-button');
const cardAddedCloseBtn = document.querySelector('.popup__close_added-card');

const modalWindowCard = document.querySelector('.popup__place_card');
const cardCloseBtn = document.querySelector('.popup__close_card');
const card = document.querySelector('.popup__content_place');

const form = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const nameInput = form.querySelector('.popup__field_type_name');
const aboutMeInput = form.querySelector('.popup__field_type_about-me');
const popupSave = form.querySelector('.popup__save');
const popupSaveCard = document.querySelector('.popup__save_card');

const render = () => {
    const html = initialCards.map(getElement);
    listContainer.prepend(...html);
}

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

        toggleModalWindow(modalWindowCard);

        const cardPictures = card.querySelector('.popup__content_place_card');
        const cardTitle = card.querySelector('.popup__title_card');

        cardTitle.textContent = item.name;
        cardPictures.src = item.link;
        cardPictures.alt = item.name;
    });

    likeBtn.addEventListener('click', getLike);

    trash.addEventListener('click', removeCard);

    return newItem;
}

const getLike = evt => {
    const element = evt.target.closest('.list-element__like');
    element.classList.toggle('list-element__like_active');
};

const removeCard = event => {
    const element = event.target.closest('.list-element');
    element.remove();
};

const toggleModalWindow = (popupName) => {
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

const handleSaveCard = event => {
    modalWindowCardAdd.classList.remove('popup_opened');
    event.preventDefault();
    const titleInput = document.querySelector('.popup__field_title').value;
    const sourceInput = document.querySelector('.popup__field_source').value;
    const element = getElement({ name: titleInput, link: sourceInput });
    listContainer.prepend(element);
}

profileEditBtn.addEventListener('click', handlePopupProfile);
profileCloseBtn.addEventListener('click', handlePopupProfile);
cardAddBtn.addEventListener('click', handlePopupAddedCard);
cardAddedCloseBtn.addEventListener('click', handlePopupAddedCard);
cardCloseBtn.addEventListener('click', handlePopupCard);

formAdd.addEventListener('submit', handleSaveCard);
form.addEventListener('submit', onSubmit);

render();