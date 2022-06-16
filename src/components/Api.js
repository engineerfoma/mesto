export default class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            'Content-type': 'application/json',
        };
    }

    getCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers,
            authorization: this._token
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Ошибка');
            });
    }

    // addCard({ field_source, field_title }) {
    //     const body = {
    //         name: field_title,
    //         link: field_source
    //     }; 
    //     return fetch(this._url, {
    //         headers: this._headers,
    //         method: 'POST',
    //         body: JSON.stringify(body)
    //     })
    //         .then((res) => {
    //             if (res.ok) {
    //               return res.json();
    //             }
    //             return Promise.reject('Ошибка');
    //         });
    // }
}