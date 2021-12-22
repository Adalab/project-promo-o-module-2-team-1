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



const data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};

// form: full name

function handlerInputName() {
  if (inputName.value === '') {
    data.name = 'Nombre Apellido';
  } else {
    data.name = inputName.value;

  }
  cardName.innerHTML = data.name.toLowerCase();
}

inputName.addEventListener('keyup', handlerInputName);


// form: job

function handlerInputOccupation() {
  if (inputOccupation.value === '') {
    data.job = 'Front-end developer';
  } else {
    data.job = inputOccupation.value;
  }
  cardOccupation.innerHTML = data.job.toLowerCase();
}

inputOccupation.addEventListener('keyup', handlerInputOccupation);


// form: phone

function handlerPreviewPhone() {
  data.phone = phoneInput.value;
  if (data.phone === '') {
    phonePreview.href = '';
    phonePreview.title = `Teléfono`;
  } else {

    phonePreview.href = `tel:${data.phone}`;
    phonePreview.title = `Teléfono: ${data.phone}`;

  }
}

phoneInput.addEventListener('keyup', handlerPreviewPhone);


// form: email

function handleKeyEmail() {
  data.email = inputEmail.value;
  if (data.email === '') {
    previewEmail.href = '';
    previewEmail.title = `Email`;
  } else {
    previewEmail.href = `mailto:${data.email}`;
    previewEmail.title = `Email: ${data.email}`;
  }
}

inputEmail.addEventListener('keyup', handleKeyEmail);


// form: links

function handlerInputLinkedin() {
  data.linkedin = inputLinkedin.value;
  if (data.linkedin === '') {
    cardLinkedin.href = '';
    cardLinkedin.title = `LinkedIn`;
  } else {
    cardLinkedin.href = data.linkedin;
    cardLinkedin.title = `LinkedIn: ${data.linkedin}`;
  }
}

function handlerInputGitHub() {
  data.github = inputGitHub.value;
  if (data.github === '') {
    cardGitHub.href = '';
    cardGitHub.title = `GitHub`;
  }else {
    cardGitHub.href = data.github;
    cardGitHub.title = `GitHub: ${data.github}`;
}
}


inputLinkedin.addEventListener('keyup', handlerInputLinkedin);
inputGitHub.addEventListener('keyup', handlerInputGitHub);


// color palettes

function setPalette1() {
  data.palette = 1;
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
  data.palette = 2;
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
  data.palette = 3;
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
  data.name = '';
  cardName.innerHTML = 'Nombre Apellido';
  // reset job
  inputOccupation.value = '';
  data.job = '';
  cardOccupation.innerHTML = 'Front-end developer';
  // reset phone
  data.phone = '';
  phoneInput.value = '';
  phonePreview.href = '';
  phonePreview.title = 'Teléfono';
  // reset email
  data.email = '';
  inputEmail.value = '';
  previewEmail.href = '';
  previewEmail.title = 'Email';
  // reset linkedin link
  data.linkedin = '';
  inputLinkedin.value = '';
  cardLinkedin.href = '';
  cardLinkedin.title = 'LinkedIn';
  // reset github link
  data.github = '';
  inputGitHub.value = '';
  cardGitHub.href = '';
  cardGitHub.title = 'GitHub';
  // reset image
  data.photo = '';
  profileImage.style.backgroundImage = 'url(./assets/images/profile-image.svg)';
  profilePreview.style.backgroundImage = 'none';
  // reset palettes
  setPalette1();
  elementSection1.classList.add('hidden');
  handlerClickLegend();
}

resetBtn.addEventListener('click', handleResetBtn);


// Seccion Comparte

const shareBtn = document.querySelector('.js-shareBtn');
const shareLink = document.querySelector('.js-shareLink');
const shareDone = document.querySelector('.js-shareDone');
const shareError = document.querySelector('.js-shareError');

function handlerClickShare(event){
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card' , {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-Type': 'application/json'
    }
  })
  .then( response => response.json())
  .then( dataApi => {
    console.log(dataApi.success);
    console.log(dataApi);
    if(dataApi.success === true){
      shareLink.innerHTML = 'Haz click aquí para ver tu tarjeta';
      shareLink.href = dataApi.cardURL;
      shareDone.classList.remove('hidden');
      shareError.classList.add('hidden');
    }else{
      shareDone.classList.add('hidden');
      shareError.classList.remove('hidden');
    }
  });
  
}

shareBtn.addEventListener('click', handlerClickShare);