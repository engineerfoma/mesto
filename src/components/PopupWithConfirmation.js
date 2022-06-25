import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__confirm-delete');
    }
    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => {
            
            this._handleSubmitCallback();
        })
    }
}