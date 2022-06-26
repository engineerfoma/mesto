import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitHandler }) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }
    
    _getInputValues = () => {
        this._objInputValues = {};
        this._inputList.forEach(input => {
            this._objInputValues[input.name] = input.value;            
        });
        return this._objInputValues;
    }

    isLoading(state, buttonSelector, loadedText = 'Сохранить', loadingText = 'Сохранение...' ) {
        state ? (document.querySelector(buttonSelector).textContent = loadingText) :
        (document.querySelector(buttonSelector).textContent = loadedText);
    }

    setEventListeners() {   
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    }

    close = () => {
        this._form.reset();
        super.closePopup();
    }
}