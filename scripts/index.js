const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameInput = form.querySelector('.popup__field_type_name');
const aboutMeInput = form.querySelector('.popup__field_type_about-me');
const popupSave = form.querySelector('.popup__save');

function toggleModalWindow() {
    
    if (modalWindow.classList.contains('popup_opened') === true) {
        modalWindow.classList.toggle('popup_opened');
    } else {
        modalWindow.classList.toggle('popup_opened');
        nameInput.value = profileTitle.textContent;
        aboutMeInput.value = profileSubtitle.textContent;
    }
}

function onSubmit(event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutMeInput.value;
    toggleModalWindow();
}

profileEditButton.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);
popupSave.addEventListener('submit', onSubmit);