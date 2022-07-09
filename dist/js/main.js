/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menuburg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuburg */ \"./modules/menuburg.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 jule 2022');\r\n(0,_modules_menuburg__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst form = () => {\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n\r\n  const formNameHead = document.getElementById('form1-name');\r\n  const formNamePopup = document.getElementById('form3-name');\r\n  const formNameFooter = document.getElementById('form2-name');\r\n\r\n  const formEmailHead = document.getElementById('form1-email');\r\n  const formEmailPopup = document.getElementById('form3-email');\r\n  const formEmailFooter = document.getElementById('form2-email');\r\n\r\n  const formPhoneHead = document.getElementById('form1-phone');\r\n  const formPhonePopup = document.getElementById('form3-phone');\r\n  const formPhoneFooter = document.getElementById('form2-phone');\r\n\r\n\r\n\r\n  const numExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    });\r\n  };\r\n\r\n  const textExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/i, '');\r\n    });\r\n  };\r\n\r\n  const emailExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^a-z@-_.!~*'\\s]/i, '');\r\n    });\r\n  };\r\n\r\n  const phoneExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^0-9-()\\s]/, '');\r\n    });\r\n  };\r\n\r\nnumExam(calcSquare);\r\nnumExam(calcCount);\r\nnumExam(calcDay);\r\n\r\ntextExam(formNameHead);\r\ntextExam(formNamePopup);\r\ntextExam(formNameFooter);\r\n\r\nemailExam(formEmailHead);\r\nemailExam(formEmailPopup);\r\nemailExam(formEmailFooter);\r\n\r\nphoneExam(formPhoneHead);\r\nphoneExam(formPhonePopup);\r\nphoneExam(formPhoneFooter);\r\n\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/menuburg.js":
/*!*****************************!*\
  !*** ./modules/menuburg.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n'use sctrict';\r\nconst menuburg = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const body = document.querySelector('body');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = document.querySelector('.close-btn');\r\n  const menuItems = document.querySelectorAll('ul>li>a');\r\n\r\n  const closeMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n  body.addEventListener('click', (e) => {\r\n    console.log(e.target);\r\n\r\n    if(e.target.closest('.menu')) {\r\n      closeMenu();\r\n    } else if(!e.target.closest('menu') || e.target.closest('.close-btn')) {\r\n      menu.classList.remove('active-menu');\r\n      \r\n    }\r\n  });\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', closeMenu));\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuburg);\n\n//# sourceURL=webpack:///./modules/menuburg.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const popupBtn = document.querySelectorAll('.popup-btn');\r\n  let count = 0;\r\n  let id;\r\n  let idNon\r\n\r\n  modal.style.opacity = 0;\r\n\r\n  const animate = () => {\r\n    count++;\r\n    id = requestAnimationFrame(animate);\r\n    \r\n    if(count < 50) {\r\n      modal.style.opacity = count * 0.025;\r\n    }  else  if(count >= 50) {\r\n      cancelAnimationFrame(id);\r\n    }  \r\n    console.log(count);\r\n  };\r\n\r\n  popupBtn.forEach(button => {\r\n    button.addEventListener('click', () => {\r\n        if (document.body.clientWidth > 768) {\r\n          modal.style.display = 'block';\r\n          animate();\r\n        } else {\r\n          modal.style.display = 'block';\r\n        }\r\n        \r\n\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))\r\n    modal.style.display = 'none';\r\n    count = 0;\r\n\r\n  });\r\n\r\n  \r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {  \r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const sliderItem = document.querySelectorAll('.portfolio-item');\r\n    let dots;\r\n\r\n    let portfolioDots = document.querySelector('.portfolio-dots');\r\n\r\n    const timerInterval = 2000;  \r\n    \r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const addDot = () => {\r\n      sliderItem.forEach((item, i) => {\r\n        const li = document.createElement('li');\r\n        if(i == 0){\r\n          li.classList.add('dot-active');\r\n        } \r\n        li.classList.add('dot');\r\n        portfolioDots.append(li);\r\n        dots = document.querySelectorAll('.dot');\r\n      });\r\n    };\r\n    addDot();\r\n    const nextSlide = (elem, index, strClass) => {\r\n      elem[index].classList.remove(strClass);\r\n    };\r\n    const prevSlide = (elem, index, strClass) => {\r\n      elem[index].classList.add(strClass);\r\n\r\n    };\r\n    \r\n    const autoSlide = () => {\r\n      \r\n      nextSlide(sliderItem, currentSlide, 'portfolio-item-active');\r\n      nextSlide(dots, currentSlide, 'dot-active');\r\n      currentSlide++;\r\n\r\n      if(currentSlide >= sliderItem.length) {\r\n        currentSlide = 0;\r\n      }\r\n      prevSlide(sliderItem, currentSlide, 'portfolio-item-active');\r\n      prevSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n      interval = setInterval(autoSlide, timer);\r\n      \r\n    };\r\n\r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n    \r\n   };\r\n   sliderBlock.addEventListener('click', (e)=>{\r\n    e.preventDefault();\r\n    if(!e.target.matches('.dot, .portfolio-btn')){\r\n      return;\r\n    }\r\n    nextSlide(sliderItem, currentSlide, 'portfolio-item-active');\r\n    nextSlide(dots, currentSlide, 'dot-active');\r\n\r\n    if(e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if(e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if(e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, i) => {\r\n        if(e.target === dot) {\r\n          currentSlide = i;\r\n        }\r\n      });\r\n    }\r\n      if(currentSlide >= sliderItem.length) {\r\n        currentSlide = 0;\r\n      }\r\n      if(currentSlide < 0) {\r\n        currentSlide = sliderItem.length - 1;\r\n      }\r\n    prevSlide(sliderItem, currentSlide, 'portfolio-item-active');\r\n    prevSlide(dots, currentSlide, 'dot-active');\r\n   });\r\n\r\n   sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if(e.target.matches('.dot, .portfolio-btn')){\r\n      stopSlide();\r\n    }\r\n   }, true);   \r\n\r\n   sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if(e.target.matches('.dot, .portfolio-btn')){\r\n      startSlide(timerInterval);\r\n    }\r\n  }, true);\r\n\r\n\r\n  startSlide(timerInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n      if (e.target.closest('.service-header-tab')) {\r\n          const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n          tabs.forEach((tab, index) => {\r\n              if (tab === tabBtn) {\r\n                  tab.classList.add('active');\r\n                  tabContent[index].classList.remove('d-none');\r\n              } else {\r\n                  tab.classList.remove('active');\r\n                  tabContent[index].classList.add('d-none');\r\n              }\r\n          });\r\n      }\r\n  });\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n'use sctrict';\r\n\r\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n  \r\n  let intervalId;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dataNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dataNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    \r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if(getTime.hours < 10) {\r\n      timerHours.textContent = '0' + getTime.hours;\r\n    } else {\r\n      timerHours.textContent = getTime.hours;\r\n    }\r\n    if(getTime.minutes < 10) {\r\n      timerMinutes.textContent = '0' + getTime.minutes;\r\n    }\r\n    else {\r\n      timerMinutes.textContent = getTime.minutes;\r\n    }\r\n    if(getTime.seconds < 10) {\r\n      timerSeconds.textContent = '0' + getTime.seconds;\r\n    }\r\n    else {\r\n      timerSeconds.textContent = getTime.seconds;\r\n    }\r\n\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      // setTimeout(updateClock, 1000);\r\n      intervalId = setInterval(updateClock, 1000);\r\n\r\n    } else  {\r\n      timerHours.textContent =  '00';\r\n      timerMinutes.textContent =  '00';\r\n      timerSeconds.textContent = '00';\r\n      clearInterval(intervalId);\r\n    }\r\n    \r\n  };\r\n  updateClock();\r\n  \r\n  \r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;