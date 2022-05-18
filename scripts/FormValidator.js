export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
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

  _toggleButtonState = (inputList) => {
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = !this._formElement.checkValidity();
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  enableValidation = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    
    
    inputList.forEach(inputElement => {
      this._toggleButtonState(inputList);
      inputElement.addEventListener('input', () => {
        this._toggleButtonState(inputList);
        this._checkInputValidity(inputElement);
      });
    });
  }
}