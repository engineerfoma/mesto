export default class Card {
    constructor(cards, cardSelecor, handlePhotoClick, handleCardRemove, handleAddLike, handleRemoveLike, userId) {
        this._cards = cards;
        this._name = cards.name;
        this._link = cards.link;
        this._likes = cards.likes;
        
        this._cardId = cards._id;
        this._userId = userId;
        this._ownerId = cards.owner._id;
        
        this._cardSelecor = cardSelecor;
        this._handlePhotoClick = handlePhotoClick;
        this._handleCardRemove = handleCardRemove;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
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

    getCardId() {
        return this._cardId;
    }
    
    _checkLikeOwner() {
        if (this._isLiked()) {
            this.likeAdd(this._cards);
        }
    }
    
    _isLikeState = () => {
        // this._isLiked() ? this.likeRemove(this._cards) : this.likeAdd(this._cards);
        this._isLiked() ? this._handleRemoveLike(this._cards) : this._handleAddLike(this._cards);

    }
    
    _isLiked = () => this._likes.some(item => item._id === this._userId)

    _checkCardOwner() {
        if (this._ownerId !== this._userId) {
            this._trachButton.remove()
        }
        
    }
    
    likeAdd(cards) {
        this._buttonLike.classList.add('list-element__like_active');
        this._counterLikesCard(cards);
    }

    likeRemove(cards) {
        this._buttonLike.classList.remove('list-element__like_active');
        this._counterLikesCard(cards);
    }
    
    _counterLikesCard = (cards) => {
        this._likes = cards.likes;
        this._counterLikes.textContent = this._likes.length;
    }

    removeElement = () => {
        this._element.remove();
        this._element = null;
    }
    
    generateCard = () => {
        this._element = this._getTemplate();
        this.cardImage = this._element.querySelector('.list-element__picture');
        this._counterLikes = this._element.querySelector('.list-element__counter-likes');
        this._counterLikes.textContent = this._likes.length;
        this.cardImage.src = this._link;
        this.cardImage.alt = this._name;
        this._element.querySelector('.list-element__title').textContent = this._name;
        
        this._setAddEventListeners();
        this._checkCardOwner();
        this._checkLikeOwner();
        
        return this._element;
    }

    _setAddEventListeners = () => {
        this.cardImage.addEventListener('click', this._handleClick);
        this._buttonLike = this._element.querySelector('.list-element__like');
        this._buttonLike.addEventListener('click', this._isLikeState);
        this._trachButton = this._element.querySelector('.list-element__trash');
        this._trachButton.addEventListener('click', () => this._handleCardRemove(this));
    }
}