'use strict';


// get html elements

// fieldset legends
const elementLegend1 = document.querySelector('.js-legendDesign');
const elementLegend2 = document.querySelector('.js-legendFill');
const elementLegend3 = document.querySelector('.js-legendShare');
// fieldset sections
const elementSection1 = document.querySelector('.js-sectionDesign');
const elementSection2 = document.querySelector('.js-sectionFill');
const elementSection3 = document.querySelector('.js-sectionShare');
// fieldset icons
const elementIcon1 = document.querySelector('.js-iconDesign');
const elementIcon2 = document.querySelector('.js-iconFill');
const elementIcon3 = document.querySelector('.js-iconShare');
// form fields
const labelPalettes = document.querySelectorAll('.js-labelPalette');
const inputName = document.querySelector('.js-name');
const inputOccupation = document.querySelector('.js-occupation');
const phoneInput = document.querySelector('.js-fill_phone');
const inputEmail = document.querySelector('.js-inputEmail');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGitHub = document.querySelector('.js-inputGitHub');
// preview elements
const cardName = document.querySelector('.js-cardName');
const cardOccupation = document.querySelector('.js-cardOccupation');
const phonePreview = document.querySelector('.js-phonePreview');
const previewEmail = document.querySelector('.js-previewEmail');
const borderPalette = document.querySelector('.js-borderPalette');
const linksIcons = document.querySelectorAll('.js-linksIcons');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const cardGitHub = document.querySelector('.js-cardGitHub');
// buttons
const resetBtn = document.querySelector('.js-resetBtn');


// collapsed/expanded sections (design, fill and share)

function handlerClickLegend() {
  elementSection1.classList.toggle('hidden');
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

elementLegend1.addEventListener('click', handlerClickLegend);
elementLegend2.addEventListener('click', handlerClickLegend2);
elementLegend3.addEventListener('click', handlerClickLegend3);


// form: full name

function handlerInputName() {
  if (inputName.value === '') {
    cardName.innerHTML = 'Nombre Apellido';
  } else {
    cardName.innerHTML = inputName.value.toLowerCase();
  }
}

inputName.addEventListener('keyup', handlerInputName);


// form: job

function handlerInputOccupation() {
  if (inputOccupation.value === '') {
    cardOccupation.innerHTML = 'Front-end developer';
  } else {
    cardOccupation.innerHTML = inputOccupation.value.toLowerCase();
  }
}

inputOccupation.addEventListener('keyup', handlerInputOccupation);


// form: phone

function handlerPreviewPhone() {
  phoneInput.value;
  phonePreview.href = `tel:${phoneInput.value}`;
  phonePreview.title = `Teléfono: ${phoneInput.value}`;
}

phoneInput.addEventListener('keyup', handlerPreviewPhone);


// form: email

function handleKeyEmail() {
  previewEmail.href = `mailto:${inputEmail.value}`;
  previewEmail.title = `Email: ${inputEmail.value}`;
}

inputEmail.addEventListener('keyup', handleKeyEmail);


// form: links

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


// color palettes

function setPalette1() {
  cardName.classList.remove('cards__title--palette2');
  cardName.classList.remove('cards__title--palette3');
  cardName.classList.add('cards__title--palette1');
  cardOccupation.classList.remove('cards__subtitle--palette2');
  cardOccupation.classList.remove('cards__subtitle--palette3');
  cardOccupation.classList.add('cards__subtitle--palette1');
  borderPalette.classList.remove('cards__wrapper--palette2');
  borderPalette.classList.remove('cards__wrapper--palette3');
  borderPalette.classList.add('cards__wrapper--palette1');
  for (const link of linksIcons) {
    link.classList.remove('cards__link--palette2');
    link.classList.remove('cards__link--palette3');
    link.classList.add('cards__link--palette1');
  }
}

function setPalette2() {
  cardName.classList.remove('cards__title--palette1');
  cardName.classList.remove('cards__title--palette3');
  cardName.classList.add('cards__title--palette2');
  cardOccupation.classList.remove('cards__subtitle--palette1');
  cardOccupation.classList.remove('cards__subtitle--palette3');
  cardOccupation.classList.add('cards__subtitle--palette2');
  borderPalette.classList.remove('cards__wrapper--palette1');
  borderPalette.classList.remove('cards__wrapper--palette3');
  borderPalette.classList.add('cards__wrapper--palette2');
  for (const link of linksIcons) {
    link.classList.remove('cards__link--palette1');
    link.classList.remove('cards__link--palette3');
    link.classList.add('cards__link--palette2');
  }
}

function setPalette3() {
  cardName.classList.remove('cards__title--palette1');
  cardName.classList.remove('cards__title--palette2');
  cardName.classList.add('cards__title--palette3');
  cardOccupation.classList.remove('cards__subtitle--palette1');
  cardOccupation.classList.remove('cards__subtitle--palette2');
  cardOccupation.classList.add('cards__subtitle--palette3');
  borderPalette.classList.remove('cards__wrapper--palette1');
  borderPalette.classList.remove('cards__wrapper--palette2');
  borderPalette.classList.add('cards__wrapper--palette3');
  for (const link of linksIcons) {
    link.classList.remove('cards__link--palette1');
    link.classList.remove('cards__link--palette2');
    link.classList.add('cards__link--palette3');
  }
}

function handlerClickPalette(event) {
  if (event.currentTarget.id === 'palette1') {
    setPalette1();
  } else if (event.currentTarget.id === 'palette2') {
    setPalette2();
  } else if (event.currentTarget.id === 'palette3') {
    setPalette3();
  }
}

for (const palette of labelPalettes) {
  palette.addEventListener('click', handlerClickPalette);
}


// reset button

function handleResetBtn() {
  // reset full name
  inputName.value = '';
  handlerInputName();
  // reset job
  inputOccupation.value = '';
  handlerInputOccupation();
  // reset phone
  phoneInput.value = '';
  phonePreview.href = '';
  phonePreview.title = 'Teléfono';
  // reset email
  inputEmail.value = '';
  previewEmail.href = '';
  previewEmail.title = 'Email';
  // reset linkedin link
  inputLinkedin.value = '';
  cardLinkedin.href = '';
  cardLinkedin.title = 'LinkedIn';
  // reset github link
  inputGitHub.value = '';
  cardGitHub.href = '';
  cardGitHub.title = 'GitHub';
  // reset image
  profileImage.style.backgroundImage = 'url(../assets/images/profile-image.svg)';
  profilePreview.style.backgroundImage = 'none';
  // reset palettes
  setPalette1();
  elementSection1.classList.add('hidden');
  handlerClickLegend();
}

resetBtn.addEventListener('click', handleResetBtn);