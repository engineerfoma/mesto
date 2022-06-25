(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=document.querySelector(".popup__form"),n=document.querySelector(".popup__form_add"),r=document.querySelector(".list"),o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),c=document.querySelector(".popup__input_type_name"),u=document.querySelector(".popup__input_type_about-me");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(".profile__avatar");var s=function(){function e(t,n,r,o,i,c,u){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_getTemplate",(function(){return document.querySelector(a._cardSelecor).content.querySelector(".list-element").cloneNode(!0)})),l(this,"_handleClick",(function(){a._handlePhotoClick(a._name,a._link)})),l(this,"_isLikeState",(function(){a._isLiked()?a.likeRemove(a._cards):a.likeAdd(a._cards)})),l(this,"_isLiked",(function(){return a._likes.some((function(e){return e._id===a._userId}))})),l(this,"_counterLikesCard",(function(e){a._likes=e.likes,a._counterLikes.textContent=a._likes.length})),l(this,"removeElement",(function(){a._element.remove(),a._element=null})),l(this,"generateCard",(function(){return a._element=a._getTemplate(),a.cardImage=a._element.querySelector(".list-element__picture"),a._counterLikes=a._element.querySelector(".list-element__counter-likes"),a._counterLikes.textContent=a._likes.length,a.cardImage.src=a._link,a.cardImage.alt=a._name,a._element.querySelector(".list-element__title").textContent=a._name,a._setAddEventListeners(),a._checkCardOwner(),a._checkLikeOwner(),a._element})),l(this,"_setAddEventListeners",(function(){a.cardImage.addEventListener("click",a._handleClick),a._buttonLike=a._element.querySelector(".list-element__like"),a._buttonLike.addEventListener("click",a._isLikeState),a._trachButton=a._element.querySelector(".list-element__trash"),a._trachButton.addEventListener("click",(function(){return a._handleCardRemove(a)}))})),this._cards=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._cardId=t._id,this._userId=u,this._ownerId=t.owner._id,this._cardSelecor=n,this._handlePhotoClick=r,this._handleCardRemove=o,this._handleAddLike=i,this._handleRemoveLike=c}var t,n;return t=e,(n=[{key:"getCardId",value:function(){return this._cardId}},{key:"_checkLikeOwner",value:function(){this._isLiked()&&this.likeAdd(this._cards)}},{key:"_checkCardOwner",value:function(){this._ownerId!==this._userId&&this._trachButton.remove()}},{key:"likeAdd",value:function(e){this._buttonLike.classList.add("list-element__like_active"),this._counterLikesCard(e)}},{key:"likeRemove",value:function(e){this._buttonLike.classList.remove("list-element__like_active"),this._counterLikesCard(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_showInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._config.errorClasss)})),p(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClasss),t.textContent=""})),p(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),p(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.disabled=!0,r._buttonElement.classList.add(r._config.inactiveButtonClass)):(r._buttonElement.classList.remove(r._config.inactiveButtonClass),r._buttonElement.disabled=!1)})),p(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),p(this,"checkFormValidity",(function(){r._toggleButtonState()})),p(this,"enableValidation",(function(){r._inputList.forEach((function(e){r._toggleButtonState(),e.addEventListener("input",(function(){r._toggleButtonState(),r._checkInputValidity(e)}))}))})),this._config=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this.checkFormValidity(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close"))&&o.closePopup()},(n="_handleOnOverlayClick")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleOnOverlayClick)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function c(e,t){var n,r,o=t.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),j(k(r=i.call(this,e)),"_getInputValues",(function(){return r._objInputValues={},r._inputList.forEach((function(e){r._objInputValues[e.name]=e.value})),r._objInputValues})),j(k(r),"close",(function(){r._form.reset(),g((n=k(r),O(c.prototype)),"closePopup",n).call(n)})),r._submitHandler=o,r._form=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._form.querySelectorAll(".popup__input")),r}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;g(O(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._cardTitle=t._popup.querySelector(".popup__title_card"),t._cardImage=t._popup.querySelector(".popup__img"),t}return t=c,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._cardTitle.textContent=t,this._cardImage.alt=t,this._cardImage.src=n,I(A(c.prototype),"openPopup",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o),this._userId=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,aboutMe:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserId",value:function(e){this._userId=e}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._token=n,this._headers={"Content-Type":"application/json",authorization:this._token}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){var t={name:e.field_name,about:e.field_about_me};return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){var t={name:e.field_title,link:e.field_source};return fetch("".concat(this._url,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){var t={avatar:e.url};return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=F(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function F(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function G(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._confirmButton=t._popup.querySelector(".popup__confirm-delete"),t}return t=c,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;J(z(c.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){e._handleSubmitCallback()}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(_);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new d(e,t),W=new d(e,n);Q.enableValidation(),W.enableValidation();var X=new B(".popup_card"),Y=new $(".popup_confirm"),Z=new D("https://mesto.nomoreparties.co/v1/cohort-43/","b95d65c3-3fd9-4b99-9ec8-1daeaeb60353"),ee=new x({name:".profile__title",job:".profile__subtitle",avatar:".profile__avatar"}),te=new S({renderer:function(e){var t=ne(e);te.addItem(t)}},r),ne=function(e){return new s(e,".template",(function(){return X.open(e)}),(function(e){Y.setSubmitAction((function(){Z.deleteCard(e.getCardId()).then((function(){e.removeElement(),Y.closePopup()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))})),Y.openPopup()}),(function(e){console.log(e),Z.addLike(e).then((function(t){e.likeAdd(t.Likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}),(function(e){Z.deleteLike(e).then((function(t){e.likeRemove(t.Likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}),ee.getUserId()).generateCard()},re=new E(".popup_add-card",{submitHandler:function(e){var t=e.field_title,n=e.field_source;Z.addCard({field_title:t,field_source:n}).then((function(e){return re.close(),te.addItem(ne(e))})).catch((function(e){return console.log("".concat(e))}))}}),oe=new E(".popup_profile",{submitHandler:function(e){Z.setUserInfo(e).then((function(e){ee.setUserInfo({name:e.name,about:e.about}),oe.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}});Promise.all([Z.getUserInfo(),Z.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(o),ee.setUserAvatar(o.avatar),ee.setUserId(o._id),te.rendererItems(i)})),o.addEventListener("click",(function(){Z.getUserInfo().then((function(e){ee.getUserInfo(e),c.value=e.name,u.value=e.about,Q.checkFormValidity(),oe.openPopup()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))})),i.addEventListener("click",(function(){W.resetValidation(),re.openPopup()})),re.setEventListeners(),oe.setEventListeners(),X.setEventListeners(),Y.setEventListeners()})();
//# sourceMappingURL=main.js.map