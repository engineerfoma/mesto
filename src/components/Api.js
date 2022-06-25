export default class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            'Content-Type': 'application/json',
            authorization: this._token
        }
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setUserInfo({ field_name, field_about_me }) {
        const body = {
            name: field_name,
            about: field_about_me
        };
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(body)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    
    getCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    
    addLike(card) {
        return fetch(`${this._url}cards/${card._id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    deleteLike(card) {
        return fetch(`${this._url}cards/${card._id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
        }
    
    addCard({ field_title, field_source }) {
        const body = {
            name: field_title,
            link: field_source
        }; 
        return fetch(`${this._url}cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    
    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setAvatar (url) {
        const body = {
            avatar: url
        }
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
}