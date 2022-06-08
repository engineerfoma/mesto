export default class UserInfo {
    constructor({ name, job }) {      
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(job);
    }

    getUserInfo() {
        return {
            nameSelector: this._userName.textContent,
            aboutMeSelector: this._userJob.textContent
        }
    }

    setUserInfo ({ field_name, field_about_me }) {
        this._userName.textContent = field_name;
        this._userJob.textContent = field_about_me;
    }
}