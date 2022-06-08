import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitHandler }) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
    }
    
    _getInputValues = () => {
        this._objInputValues = {};
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._inputList.forEach(input => {
            this._objInputValues[input.name] = input.value;            
        });
        return this._objInputValues;
    }

    setEventListeners() {
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        })
        super.setEventListeners();
    }

    close = () => {
        this._form.reset();
        super.closePopup();
    }
}