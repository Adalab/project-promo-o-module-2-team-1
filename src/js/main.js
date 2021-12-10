'use strict';

// DISEÑA
// obtener elemento html legend de diseña

const elementLegend1 = document.querySelector('.js-legendDesign');
const elementSection1 = document.querySelector('.js-sectionDesign');
const elementIcon1 = document.querySelector('.js-iconDesign');
const elementLegend2 = document.querySelector('.js-legendFill');
const elementSection2 = document.querySelector('.js-sectionFill');
const elementIcon2 = document.querySelector('.js-iconFill');
const elementLegend3 = document.querySelector('.js-legendShare');
const elementSection3 = document.querySelector('.js-sectionShare');
const elementIcon3 = document.querySelector('.js-iconShare');





// Funciones

function handlerClickLegend() {
    elementSection1.classList.toggle('hidden');
    if (elementSection1.classList.contains('hidden')) {
        elementIcon1.classList.remove('fa-chevron-up');
        elementIcon1.classList.add('fa-chevron-down');
    } else {
        elementIcon1.classList.remove('fa-chevron-down');
        elementIcon1.classList.add('fa-chevron-up');
    }
}

function handlerClickLegend2() {
    elementSection2.classList.toggle('hidden');
    if (elementSection2.classList.contains('hidden')) {
        elementIcon2.classList.remove('fa-chevron-up');
        elementIcon2.classList.add('fa-chevron-down');
    } else {
        elementIcon2.classList.remove('fa-chevron-down');
        elementIcon2.classList.add('fa-chevron-up');
    }
}

function handlerClickLegend3() {
    elementSection3.classList.toggle('hidden');
    if (elementSection3.classList.contains('hidden')) {
        elementIcon3.classList.remove('fa-chevron-up');
        elementIcon3.classList.add('fa-chevron-down');
    } else {
        elementIcon3.classList.remove('fa-chevron-down');
        elementIcon3.classList.add('fa-chevron-up');
    }
}

// escuchar y manejar el elemento obtenido

elementLegend1.addEventListener('click', handlerClickLegend);
elementLegend2.addEventListener('click', handlerClickLegend2);
elementLegend3.addEventListener('click', handlerClickLegend3);


// cambiar icono flecha de diseña
// ocultar todas las section
// mostrar la sección diseña

// RELLENA
// obtener elemento html legend de rellena
// escuchar y manejar el elemento obtenido
// cambiar icono flecha de rellena
// ocultar todas las section
// mostrar la sección rellena

// COMPARTE
// obtener elemento html legend de comparte
// escuchar y manejar el elemento obtenido
// cambiar icono flecha de comparte
// ocultar todas las section
// mostrar la sección comparte