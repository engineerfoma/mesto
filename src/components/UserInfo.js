export default class UserInfo {
    constructor({ name, job, avatar }) {      
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
        this._userAvatar = document.querySelector(avatar);
        this._userId = null;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            aboutMe: this._userJob.textContent,
            avatar: this._userAvatar.src,
        }
    }

    setUserInfo (data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.about;
        this._userAvatar.src = data.avatar;
    }

    getUserId() {
        return this._userId;
    }

    setUserId(userId) {
        this._userId = userId;
    }
}