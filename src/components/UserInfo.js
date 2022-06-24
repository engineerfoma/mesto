export default class UserInfo {
    constructor({ name, job, avatar }) {      
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
        this._userAvatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            aboutMe: this._userJob.textContent
        }
    }

    setUserInfo (data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.about;
    }

    setUserAvatar(link) {
        this._userAvatar.src = link;
    }

    getUserId() {
        return this._userId;
    }

    setUserId(userId) {
        this._userId = userId;
    }
}