"use strict";const boxArrowElement=document.querySelector(".js-box__arrow");function handlerArrowClick(o){changeBoxArrow(o.currentTarget),showBoxMain()}function changeBoxArrow(o){o.classList.contains("fa-chevron-up")?(o.classList.remove("fa-chevron-up"),o.classList.add("fa-chevron-down")):(o.classList.remove("fa-chevron-down"),o.classList.add("fa-chevron-up"))}function showBoxMain(){document.querySelector(".js-box__main").classList.toggle("hidden")}boxArrowElement.addEventListener("click",handlerArrowClick);