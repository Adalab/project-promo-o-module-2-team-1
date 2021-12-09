'use strict';

const boxArrowElement = document.querySelector('.js-box__arrow');
const boxMainElement = document.querySelector('.js-box__main');


boxArrowElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick() {
    if (boxArrowElement.classList.contains('fa-chevron-up')) {
        boxArrowElement.classList.remove('fa-chevron-up');
        boxArrowElement.classList.add('fa-chevron-down');
        showContent();
    } else {
        boxArrowElement.classList.remove('fa-chevron-down');
        boxArrowElement.classList.add('fa-chevron-up');
        showContent();
    }
}

function showContent() {
    if (boxMainElement.classList.contains('hidden')) {
        // borrar la clase .hidden para mostrar el contenido
        boxMainElement.classList.remove('hidden');
    } else {
        // añadir la clase .hidden para ocultar el contenido
        boxMainElement.classList.add('hidden');
    }
}