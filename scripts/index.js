const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const form = document.querySelector('.popup__form');
const nameInput = form.querySelector('.popup__field_name');
const aboutMeInput = form.querySelector('.popup__field_about-me');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupSave = form.querySelector('.popup__save');


function toggleModalWindow () {
    modalWindow.classList.toggle('popup_opened');
    nameInput.value = profileTitle.textContent;
    aboutMeInput.value = profileSubtitle.textContent;
}

function onOverlayClick (event) {
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}

function saveForm () {
    modalWindow.classList.toggle('popup_opened');
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutMeInput.value;
}

profileEditButton.addEventListener('click', toggleModalWindow);

modalCloseBtn.addEventListener('click', toggleModalWindow);

modalWindow.addEventListener('click', onOverlayClick)

popupSave.addEventListener('click', saveForm)


function onSubmit (event) {
    event.preventDefault();
}

form.addEventListener('click', onSubmit);