const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClasss);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClasss);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  };
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement, config, formElement);
  
  inputList.forEach((inputElement) => {
    
    inputElement.addEventListener('input', function () {
    
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config, formElement);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, config, formElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = !formElement.checkValidity();
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 