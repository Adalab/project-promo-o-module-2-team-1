'use strict';


// get html elements

// fieldset legends
const legendDesign = document.querySelector('.js-legend-design');
const legendFill = document.querySelector('.js-legend-fill');
const legendShare = document.querySelector('.js-legend-share');
// fieldset sections
const sectionDesign = document.querySelector('.js-section-design');
const sectionFill = document.querySelector('.js-section-fill');
const sectionShare = document.querySelector('.js-section-share');
// fieldset icons
const iconDesign = document.querySelector('.js-icon-design');
const iconFill = document.querySelector('.js-icon-fill');
const iconShare = document.querySelector('.js-icon-share');
// form fields
const palettes = document.querySelectorAll('.js-palette');
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const phoneInput = document.querySelector('.js-input-phone');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedIn = document.querySelector('.js-input-linkedin');
const inputGitHub = document.querySelector('.js-input-github');
// preview elements
const cardName = document.querySelector('.js-card-name');
const cardJob = document.querySelector('.js-card-job');
const borderColor = document.querySelector('.js-border-color');
const cardPhone = document.querySelector('.js-card-phone');
const cardEmail = document.querySelector('.js-card-email');
const cardLinkedIn = document.querySelector('.js-card-linkedin');
const cardGitHub = document.querySelector('.js-card-github');
const cardIcons = document.querySelectorAll('.js-card-icons');
// buttons
const resetBtn = document.querySelector('.js-reset-btn');


// collapsed/expanded sections (design, fill and share)

function handleClickLegendDesign() {
  sectionDesign.classList.toggle('hidden');
  if (sectionDesign.classList.contains('hidden')) {
    iconDesign.classList.remove('fa-chevron-up');
    iconDesign.classList.add('fa-chevron-down');
  } else {
    iconDesign.classList.remove('fa-chevron-down');
    iconDesign.classList.add('fa-chevron-up');
    sectionFill.classList.add('hidden');
    iconFill.classList.remove('fa-chevron-up');
    iconFill.classList.add('fa-chevron-down');
    sectionShare.classList.add('hidden');
    iconShare.classList.remove('fa-chevron-up');
    iconShare.classList.add('fa-chevron-down');
  }
}

function handleClickLegendFill() {
  sectionFill.classList.toggle('hidden');
  if (sectionFill.classList.contains('hidden')) {
    iconFill.classList.remove('fa-chevron-up');
    iconFill.classList.add('fa-chevron-down');
  } else {
    iconFill.classList.remove('fa-chevron-down');
    iconFill.classList.add('fa-chevron-up');
    sectionDesign.classList.add('hidden');
    iconDesign.classList.remove('fa-chevron-up');
    iconDesign.classList.add('fa-chevron-down');
    sectionShare.classList.add('hidden');
    iconShare.classList.remove('fa-chevron-up');
    iconShare.classList.add('fa-chevron-down');
  }
}

function handleClickLegendShare() {
  sectionShare.classList.toggle('hidden');
  if (sectionShare.classList.contains('hidden')) {
    iconShare.classList.remove('fa-chevron-up');
    iconShare.classList.add('fa-chevron-down');
  } else {
    iconShare.classList.remove('fa-chevron-down');
    iconShare.classList.add('fa-chevron-up');
    sectionDesign.classList.add('hidden');
    iconDesign.classList.remove('fa-chevron-up');
    iconDesign.classList.add('fa-chevron-down');
    sectionFill.classList.add('hidden');
    iconFill.classList.remove('fa-chevron-up');
    iconFill.classList.add('fa-chevron-down');
  }
}

legendDesign.addEventListener('click', handleClickLegendDesign);
legendFill.addEventListener('click', handleClickLegendFill);
legendShare.addEventListener('click', handleClickLegendShare);


// form: full name

function handleInputName() {
  if (inputName.value === '') {
    cardName.innerHTML = 'Nombre Apellido';
  } else {
    cardName.innerHTML = inputName.value.toLowerCase();
  }
}

inputName.addEventListener('keyup', handleInputName);


// form: job

function handleInputJob() {
  if (inputJob.value === '') {
    cardJob.innerHTML = 'Front-end developer';
  } else {
    cardJob.innerHTML = inputJob.value.toLowerCase();
  }
}

inputJob.addEventListener('keyup', handleInputJob);


// form: phone

function handleInputPhone() {
  phoneInput.value;
  cardPhone.href = `tel:${phoneInput.value}`;
  cardPhone.title = `Teléfono: ${phoneInput.value}`;
}

phoneInput.addEventListener('keyup', handleInputPhone);


// form: email

function handleInputEmail() {
  cardEmail.href = `mailto:${inputEmail.value}`;
  cardEmail.title = `Email: ${inputEmail.value}`;
}

inputEmail.addEventListener('keyup', handleInputEmail);


// form: links

function handleInputLinkedIn() {
  cardLinkedIn.href = inputLinkedIn.value;
  cardLinkedIn.title = `LinkedIn: ${inputLinkedIn.value}`;
}

function handleInputGitHub() {
  cardGitHub.href = inputGitHub.value;
  cardGitHub.title = `GitHub: ${inputGitHub.value}`;
}

inputLinkedIn.addEventListener('keyup', handleInputLinkedIn);
inputGitHub.addEventListener('keyup', handleInputGitHub);


// color palettes

function setPalette1() {
  cardName.classList.remove('cards__title--palette2');
  cardName.classList.remove('cards__title--palette3');
  cardName.classList.remove('cards__title--palette4');
  cardName.classList.add('cards__title--palette1');
  cardJob.classList.remove('cards__subtitle--palette2');
  cardJob.classList.remove('cards__subtitle--palette3');
  cardJob.classList.remove('cards__subtitle--palette4');
  cardJob.classList.add('cards__subtitle--palette1');
  borderColor.classList.remove('cards__wrapper--palette2');
  borderColor.classList.remove('cards__wrapper--palette3');
  borderColor.classList.remove('cards__wrapper--palette4');
  borderColor.classList.add('cards__wrapper--palette1');
  for (const icon of cardIcons) {
    icon.classList.remove('cards__icon--palette2');
    icon.classList.remove('cards__icon--palette3');
    icon.classList.remove('cards__icon--palette4');
    icon.classList.add('cards__icon--palette1');
  }
}

function setPalette2() {
  cardName.classList.remove('cards__title--palette1');
  cardName.classList.remove('cards__title--palette3');
  cardName.classList.remove('cards__title--palette4');
  cardName.classList.add('cards__title--palette2');
  cardJob.classList.remove('cards__subtitle--palette1');
  cardJob.classList.remove('cards__subtitle--palette3');
  cardJob.classList.remove('cards__subtitle--palette4');
  cardJob.classList.add('cards__subtitle--palette2');
  borderColor.classList.remove('cards__wrapper--palette1');
  borderColor.classList.remove('cards__wrapper--palette3');
  borderColor.classList.remove('cards__wrapper--palette4');
  borderColor.classList.add('cards__wrapper--palette2');
  for (const icon of cardIcons) {
    icon.classList.remove('cards__icon--palette1');
    icon.classList.remove('cards__icon--palette3');
    icon.classList.remove('cards__icon--palette4');
    icon.classList.add('cards__icon--palette2');
  }
}

function setPalette3() {
  cardName.classList.remove('cards__title--palette1');
  cardName.classList.remove('cards__title--palette2');
  cardName.classList.remove('cards__title--palette4');
  cardName.classList.add('cards__title--palette3');
  cardJob.classList.remove('cards__subtitle--palette1');
  cardJob.classList.remove('cards__subtitle--palette2');
  cardJob.classList.remove('cards__subtitle--palette4');
  cardJob.classList.add('cards__subtitle--palette3');
  borderColor.classList.remove('cards__wrapper--palette1');
  borderColor.classList.remove('cards__wrapper--palette2');
  borderColor.classList.remove('cards__wrapper--palette4');
  borderColor.classList.add('cards__wrapper--palette3');
  for (const icon of cardIcons) {
    icon.classList.remove('cards__icon--palette1');
    icon.classList.remove('cards__icon--palette2');
    icon.classList.remove('cards__icon--palette4');
    icon.classList.add('cards__icon--palette3');
  }
}

function setPalette4() {
  cardName.classList.remove('cards__title--palette1');
  cardName.classList.remove('cards__title--palette2');
  cardName.classList.remove('cards__title--palette3');
  cardName.classList.add('cards__title--palette4');
  cardJob.classList.remove('cards__subtitle--palette1');
  cardJob.classList.remove('cards__subtitle--palette2');
  cardJob.classList.remove('cards__subtitle--palette3');
  cardJob.classList.add('cards__subtitle--palette4');
  borderColor.classList.remove('cards__wrapper--palette1');
  borderColor.classList.remove('cards__wrapper--palette2');
  borderColor.classList.remove('cards__wrapper--palette3');
  borderColor.classList.add('cards__wrapper--palette4');
  for (const icon of cardIcons) {
    icon.classList.remove('cards__icon--palette1');
    icon.classList.remove('cards__icon--palette2');
    icon.classList.remove('cards__icon--palette3');
    icon.classList.add('cards__icon--palette4');
  }
}

function handleClickPalette(event) {
  if (event.currentTarget.id === 'palette1') {
    setPalette1();
  } else if (event.currentTarget.id === 'palette2') {
    setPalette2();
  } else if (event.currentTarget.id === 'palette3') {
    setPalette3();
  } else if (event.currentTarget.id === 'palette4') {
    setPalette4();
  }
}

for (const palette of palettes) {
  palette.addEventListener('click', handleClickPalette);
}


// reset button

function handleResetBtn() {
  // reset full name
  inputName.value = '';
  handleInputName();
  // reset job
  inputJob.value = '';
  handleInputJob();
  // reset phone
  phoneInput.value = '';
  cardPhone.href = '';
  cardPhone.title = 'Teléfono';
  // reset email
  inputEmail.value = '';
  cardEmail.href = '';
  cardEmail.title = 'Email';
  // reset linkedin link
  inputLinkedIn.value = '';
  cardLinkedIn.href = '';
  cardLinkedIn.title = 'LinkedIn';
  // reset github link
  inputGitHub.value = '';
  cardGitHub.href = '';
  cardGitHub.title = 'GitHub';
  // reset image
  profileImage.style.backgroundImage = 'url(./assets/images/profile-image.svg)';
  profilePreview.style.backgroundImage = 'none';
  // reset palettes
  setPalette1();
  sectionDesign.classList.add('hidden');
  handleClickLegendDesign();
}

resetBtn.addEventListener('click', handleResetBtn);