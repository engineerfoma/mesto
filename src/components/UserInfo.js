export default class UserInfo {
    constructor({ name, job }) {      
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            aboutMe: this._userJob.textContent
        }
    }

    setUserInfo ({ field_name, field_about_me }) {
        this._userName.textContent = field_name;
        this._userJob.textContent = field_about_me;
    }
}