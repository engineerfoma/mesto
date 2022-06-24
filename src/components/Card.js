export default class Card {
    constructor(cards, cardSelecor, handlePhotoClick, handleCardRemove, handleLikeElement, userId) {
        this._name = cards.name;
        this._link = cards.link;
        this._likes = cards.likes;

        this._cardId = cards._id;
        this._userId = userId;
        this._ownerId = cards.owner._id;

        this._cardSelecor = cardSelecor;
        this._handlePhotoClick = handlePhotoClick;
        this._handleCardRemove = handleCardRemove;
        this._handleLikeElement = handleLikeElement;
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

    _handleRemoveElement = () => {
        this._element.remove();
        this._element = null;
    }

    getCardId() {
        return this._cardId;
    }

    isLiked = () => {
        return this._likes.some(item => item._cardId === this._userId);
    }

    counterLikes(likes) {
        this._likes = likes;
        this._titleCounterLikes.textContent = this._likes.length;
        this.isLiked ? this._buttonLike.classList.add('list-element__like_active') : this._buttonLike.classList.remove('list-element__like_active');
    }

    _setAddEventListeners = () => {
        this.cardImage.addEventListener('click', this._handleClick);
        this._buttonLike = this._element.querySelector('.list-element__like');
        this._buttonLike.addEventListener('click', this._handleLikeElement);
        this._element.querySelector('.list-element__trash').addEventListener('click', () => this._handleCardRemove(this));
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this.cardImage = this._element.querySelector('.list-element__picture');
        this._counterLikes = this._element.querySelector('.list-element__counter-likes');
        this._setAddEventListeners();
        if (this._ownerId !== this._userId) {
            this._element.querySelector('.list-element__trash').remove()
        }

        this.cardImage.src = this._link;
        this.cardImage.alt = this._name;
        this._element.querySelector('.list-element__title').textContent = this._name;
        
        this._titleCounterLikes = this._element.querySelector('.list-element__counter-likes');
        this._titleCounterLikes.textContent = this._likes.length;

        return this._element;
    }
}