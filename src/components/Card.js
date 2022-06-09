export default class Card {
    constructor(cards, cardSelecor, handlePhotoClick) {
        this._name = cards.name;
        this._link = cards.link;
        this._cardSelecor = cardSelecor;
        this._handlePhotoClick = handlePhotoClick;
    }

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._cardSelecor)
            .content
            .querySelector('.list-element') 
            .cloneNode(true);

        return cardElement;
    }

    _handleClick = () => {
        this._handlePhotoClick(this._name, this._link)
    }

    _handleLikeElement = (event) => {
        event.target.classList.toggle('list-element__like_active');
    }

    _handleRemoveElement = () => {
        this._element.remove();
    }

    _setAddEventListeners = () => {
        this.cardImage.addEventListener('click', this._handleClick);
        this._element.querySelector('.list-element__like').addEventListener('click', this._handleLikeElement);
        this._element.querySelector('.list-element__trash').addEventListener('click', this._handleRemoveElement);
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this.cardImage = this._element.querySelector('.list-element__picture');
        this._setAddEventListeners();

        this.cardImage.src = this._link;
        this.cardImage.alt = this._name;
        this._element.querySelector('.list-element__title').textContent = this._name;

        return this._element;
    }
}