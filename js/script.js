var searchField = document.querySelector('.search-form__search-field');
var searchLabel = document.querySelector('.search-form__search-label');
var loginEmail = document.querySelector('.login-form__email');
var loginEmailLabel = document.querySelector('.login-form__email-label');
var loginPass = document.querySelector('.login-form__password');
var loginPassLabel = document.querySelector('.login-form__password-label');
var mailingEmail = document.querySelector('.mailing-block__email');
var mailingEmailLabel = document.querySelector('.mailing-block__email-label');
var modalName = document.querySelector('.modal-feedback__input--name');
var modalNameLabel = document.querySelector('.modal-feedback__label--name');
var modalEmail = document.querySelector('.modal-feedback__input--email');
var modalEmailLabel = document.querySelector('.modal-feedback__label--email');
var modalExtra = document.querySelector('.modal-feedback__textarea');
var modalExtraLabel = document.querySelector('.modal-feedback__label--extra');
var modalOpen = document.querySelector('.btn--feedback');
var modalContent = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
if (modalContent != null) var modalClose = modalContent.querySelector('.modal-feedback__close');

function fieldValue(input, label) {
  input.addEventListener('change', function() {
    if (input.value) {
      label.classList.add('display-label');
      input.classList.add('input-field-value');
    }
    if (!input.value) {
      label.classList.remove('display-label');
      input.classList.remove('input-field-value');
    }
  });
}

if (modalOpen != null) {
  modalOpen.addEventListener("click", function(event) {
    event.preventDefault();
    modalContent.classList.add("modal-content-show");
    modalContent.classList.add("bounceInDown");
    overlay.classList.add("modal-content-show");
  });
}

if (overlay != null) overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content-show");
  modalContent.classList.remove("bounceInDown");
  overlay.classList.remove("modal-content-show");
});

if (modalClose != null) modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content-show");
  modalContent.classList.remove("bounceInDown");
  overlay.classList.remove("modal-content-show");
});

fieldValue(searchField, searchLabel);
fieldValue(loginEmail, loginEmailLabel);
fieldValue(loginPass, loginPassLabel);
fieldValue(mailingEmail, mailingEmailLabel);
fieldValue(modalName, modalNameLabel);
fieldValue(modalEmail, modalEmailLabel);
fieldValue(modalExtra, modalExtraLabel);

if (ymaps != null) {
  ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
        center: [59.939581230440595, 30.330457396881112],
        zoom: 16
      }, {
        searchControlProvider: "yandex#search"
      }),
      myPlacemark = new ymaps.Placemark([59.93865528971432, 30.32290429629516], {
        hintContent: "Gllacy",
        balloonContent: "Gllacy здесь"
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/icon-pin.png",
        // Размеры метки.
        iconImageSize: [218, 142],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -132]
      });

    myMap.geoObjects.add(myPlacemark);
  });
}
