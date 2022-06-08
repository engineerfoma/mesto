import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardTitle = this._popup.querySelector('.popup__title_card');
        this._cardImage = this._popup.querySelector('.popup__img');

    }

    open({ name, link }) {
        this._cardTitle.textContent = name;
        this._cardImage.alt = name;
        this._cardImage.src = link;
        
        super.openPopup();
    }
}