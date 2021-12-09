'use strict';

const boxArrowElement = document.querySelector('.js-box__arrow');
const boxMainElement = document.querySelector('.js-box__main');


boxArrowElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick() {
    if (arrowElement.classList.contains('fa-chevron-up')) {
        arrowElement.classList.remove('fa-chevron-up');
        arrowElement.classList.add('fa-chevron-down');
        showContent();
    } else {
        arrowElement.classList.remove('fa-chevron-down');
        arrowElement.classList.add('fa-chevron-up');
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