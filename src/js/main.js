'use strict';

console.log('>> Ready :)');

const phoneInput = document.querySelector(".js-fill_phone")
const phonePreview = document.querySelector(".js-phonePreview");


function handlerPreviewPhone() {
    console.log(phoneInput.value);
    phonePreview.href = `tel:${phoneInput.value}`;
}

phoneInput.addEventListener("keyup", handlerPhonePreview);
