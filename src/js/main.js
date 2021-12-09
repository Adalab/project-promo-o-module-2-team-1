'use strict';

const boxArrowElement = document.querySelector('.js-box__arrow');

boxArrowElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick(event) {
  const arrow = event.currentTarget;
  if (arrow.classList.contains('fa-chevron-up')) {
    arrow.classList.remove('fa-chevron-up');
    arrow.classList.add('fa-chevron-down');
    showBoxMain();
  } else {
    arrow.classList.remove('fa-chevron-down');
    arrow.classList.add('fa-chevron-up');
    showBoxMain();
  }
}

function showBoxMain() {
  const boxMainElement = document.querySelector('.js-box__main');
  boxMainElement.classList.toggle('hidden');
}