export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
  }

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClasss);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClasss);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    };
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  resetValidation() {
    this.checkFormValidity();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  checkFormValidity = () => {
    
    this._toggleButtonState();
  }

  enableValidation = () => {
    this._inputList.forEach(inputElement => {
      this._toggleButtonState();
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }
}