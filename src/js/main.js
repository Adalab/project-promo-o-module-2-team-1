'use strict';

// obtener elemento html con clase .js-box__arrow (flecha)
const boxArrowElement = document.querySelector('.js-box__arrow');

// escuchar y manejar evento click
boxArrowElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick(event) {
  // función cambiar icono flecha
  changeBoxArrow(event.currentTarget);
  // función mostrar/ocultar contenido
  showBoxMain();
}

function changeBoxArrow(arrowElement) {
  // si contiene el icono flecha-arriba lo cambia por el icono flecha-abajo y viceversa
  if (arrowElement.classList.contains('fa-chevron-up')) {
    arrowElement.classList.remove('fa-chevron-up');
    arrowElement.classList.add('fa-chevron-down');
  } else {
    arrowElement.classList.remove('fa-chevron-down');
    arrowElement.classList.add('fa-chevron-up');
  }
}

function showBoxMain() {
  // obtener elemento html con clase .js-box__main (contenido)
  const boxMainElement = document.querySelector('.js-box__main');
  // eliminar/añadir clase .hidden
  boxMainElement.classList.toggle('hidden');
}