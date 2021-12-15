'use strict';


// obtener elementos html

const elementLegend1 = document.querySelector('.js-legendDesign');
const elementSection1 = document.querySelector('.js-sectionDesign');
const elementIcon1 = document.querySelector('.js-iconDesign');
const elementLegend2 = document.querySelector('.js-legendFill');
const elementSection2 = document.querySelector('.js-sectionFill');
const elementIcon2 = document.querySelector('.js-iconFill');
const elementLegend3 = document.querySelector('.js-legendShare');
const elementSection3 = document.querySelector('.js-sectionShare');
const elementIcon3 = document.querySelector('.js-iconShare');


// funciones manejadoras

function handlerClickLegend() {
  elementSection1.classList.toggle('hidden');
  // console.log(elementSection1.classList.contains('hidden'));

  if (elementSection1.classList.contains('hidden')) {
    elementIcon1.classList.remove('fa-chevron-up');
    elementIcon1.classList.add('fa-chevron-down');
  } else {
    elementIcon1.classList.remove('fa-chevron-down');
    elementIcon1.classList.add('fa-chevron-up');
    elementSection2.classList.add('hidden');
    elementIcon2.classList.remove('fa-chevron-up');
    elementIcon2.classList.add('fa-chevron-down');
    elementSection3.classList.add('hidden');
    elementIcon3.classList.remove('fa-chevron-up');
    elementIcon3.classList.add('fa-chevron-down');
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
    elementSection1.classList.add('hidden');
    elementIcon1.classList.remove('fa-chevron-up');
    elementIcon1.classList.add('fa-chevron-down');
    elementSection3.classList.add('hidden');
    elementIcon3.classList.remove('fa-chevron-up');
    elementIcon3.classList.add('fa-chevron-down');
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
    elementSection1.classList.add('hidden');
    elementIcon1.classList.remove('fa-chevron-up');
    elementIcon1.classList.add('fa-chevron-down');
    elementSection2.classList.add('hidden');
    elementIcon2.classList.remove('fa-chevron-up');
    elementIcon2.classList.add('fa-chevron-down');
  }
}


// escuchar y manejar evento

elementLegend1.addEventListener('click', handlerClickLegend);
elementLegend2.addEventListener('click', handlerClickLegend2);
elementLegend3.addEventListener('click', handlerClickLegend3);


// formulario: nombre completo

const inputName = document.querySelector('.js-name');

function handlerInputName() {
  const cardName = document.querySelector('.js-cardName');
  if (inputName.value === '') {
    cardName.innerHTML = 'Nombre Apellido';
  } else {
    cardName.innerHTML = inputName.value.toLowerCase();
  }
}

inputName.addEventListener('keyup', handlerInputName);


// formulario: puesto

const inputOccupation = document.querySelector('.js-occupation');

function handlerInputOccupation() {
  const cardOccupation = document.querySelector('.js-cardOccupation');
  if (inputOccupation.value === '') {
    cardOccupation.innerHTML = 'Front-end developer';
  } else {
    cardOccupation.innerHTML = inputOccupation.value.toLowerCase();
  }
}

inputOccupation.addEventListener('keyup', handlerInputOccupation);


// formulario: teléfono

const phoneInput = document.querySelector('.js-fill_phone');
const phonePreview = document.querySelector('.js-phonePreview');

function handlerPreviewPhone() {
  phoneInput.value;
  phonePreview.href = `tel:${phoneInput.value}`;
  phonePreview.title = `Teléfono: ${phoneInput.value}`;
}

phoneInput.addEventListener('keyup', handlerPreviewPhone);


// formulario: email

const inputEmail = document.querySelector('.js-inputEmail');
const previewEmail = document.querySelector('.js-previewEmail');

function handleKeyEmail() {
  const valueInputEmail = inputEmail.value;
  previewEmail.href = `mailto:${valueInputEmail}`;
  previewEmail.title = `Email: ${valueInputEmail}`;
}

inputEmail.addEventListener('keyup', handleKeyEmail);


// formulario: enlaces

const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGitHub = document.querySelector('.js-inputGitHub');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const cardGitHub = document.querySelector('.js-cardGitHub');

function handlerInputLinkedin() {
  cardLinkedin.href = inputLinkedin.value;
  cardLinkedin.title = `LinkedIn: ${inputLinkedin.value}`;
}

function handlerInputGitHub() {
  cardGitHub.href = inputGitHub.value;
  cardGitHub.title = `GitHub: ${inputGitHub.value}`;
}

inputLinkedin.addEventListener('keyup', handlerInputLinkedin);
inputGitHub.addEventListener('keyup', handlerInputGitHub);