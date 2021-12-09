'use strict';

// obtener elemento html con clase .js-box__arrow (flecha)
const boxArrowElement = document.querySelector('.js-box__arrow');

// escuchar y manejar evento click
boxArrowElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick(event) {
  // función: cambiar icono flecha
  changeBoxArrow(event.currentTarget);

  // función: mostrar/ocultar contenido
  showBoxMain();
}

function changeBoxArrow(arrowElement) {
  // si contiene el icono flecha-arriba
  if (arrowElement.classList.contains('fa-chevron-up')) {
    // añadir icono flecha-abajo y borrar icono flecha-arriba
    arrowElement.classList.add('fa-chevron-down');
    arrowElement.classList.remove('fa-chevron-up');
  } else {
    // añadir icono flecha-arriba y borrar icono flecha-abajo
    arrowElement.classList.add('fa-chevron-up');
    arrowElement.classList.remove('fa-chevron-down');
  }
}

function showBoxMain() {
  // obtener elemento html con clase .js-box__main (contenido)
  const boxMainElement = document.querySelector('.js-box__main');

  // eliminar/añadir clase .hidden
  boxMainElement.classList.toggle('hidden');
}