'use strict';

// DISEÑA
// obtener elemento html legend de diseña

const elementLegend1 = document.querySelector('.js-legendDesign');
const elementSection1 = document.querySelector('.js-sectionDesign');
const elementIcon1 = document.querySelector('.js-iconDesign');


// Funciones

function handlerClickLegend(){
    elementSection1.classList.toggle('hidden');
    if ( elementSection1.classList.contains('hidden') ){
        elementIcon1.classList.remove('fa-chevron-up');
        elementIcon1.classList.add('fa-chevron-down');
    } else{
        elementIcon1.classList.remove('fa-chevron-down');
        elementIcon1.classList.add('fa-chevron-up');
    }
}

// escuchar y manejar el elemento obtenido

elementLegend1.addEventListener('click', handlerClickLegend);



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