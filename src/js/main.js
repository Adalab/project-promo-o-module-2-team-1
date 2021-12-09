'use strict';

// obtener elemento html a partir de la clase css
function getElement(selector) {
  const element = document.querySelector(selector);
  return element;
}

// obtener elementos html (fieldsets)
const designElement = getElement('.js-design');

// escuchar y manejar eventos click
designElement.addEventListener('click', handlerArrowClick);

function handlerArrowClick(event) {
  // elemento clickado (flecha)
  const arrowElement = event.target;
  // elemento escuchado (fieldset)
  const fieldsetElement = event.currentTarget;

  // si el elemento clickado es una flecha
  if (arrowElement.classList.contains('js-arrow')) {
    // cambiar icono flecha
    changeArrowIcon(arrowElement);

    // mostrar/ocultar sección
    showSection(fieldsetElement);
  }
}

// cambiar icono flecha
function changeArrowIcon(arrow) {
  if (arrow.classList.contains('fa-chevron-up')) {
    arrow.classList.add('fa-chevron-down');
    arrow.classList.remove('fa-chevron-up');
  } else {
    arrow.classList.add('fa-chevron-up');
    arrow.classList.remove('fa-chevron-down');
  }
}

// mostrar/ocultar sección (diseña, rellena o comparte)
function showSection(element) {
  if (element.classList.contains('js-design')) {
    changeVisibility('.js-design-section');
  }
}

// cambiar visibilidad de un elemento
function changeVisibility(selector) {
  // obtener elemento html a partir de la clase css
  const element = getElement(selector);

  // borrar/añadir clase .hidden
  element.classList.toggle('hidden');
}