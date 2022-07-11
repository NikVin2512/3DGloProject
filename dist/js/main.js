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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menuburg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuburg */ \"./modules/menuburg.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 jule 2022');\r\n(0,_modules_menuburg__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form1',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form2',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ formId: 'form3',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock= document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.getElementById('total');\r\n\r\n  \r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if(calcCount.value && calcCount.value > 1) {\r\n      calcCountValue += calcCount.value / 10;\r\n    } \r\n\r\n    if(calcCount.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if(calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if(calcSquare.value && calcType.value){\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    total.textContent = totalValue;\r\n  };\r\n\r\n  calcBlock.addEventListener('input', (e) => {\r\n    if(e.target === calcType || e.target === calcSquare ||\r\n      e.target === calcCount || e.target === calcDay){\r\n      countCalc();\r\n    }\r\n  });\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst form = () => {\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n\r\n  const formNameHead = document.getElementById('form1-name');\r\n  const formNamePopup = document.getElementById('form3-name');\r\n  const formNameFooter = document.getElementById('form2-name');\r\n\r\n  const formEmailHead = document.getElementById('form1-email');\r\n  const formEmailPopup = document.getElementById('form3-email');\r\n  const formEmailFooter = document.getElementById('form2-email');\r\n\r\n  const formPhoneHead = document.getElementById('form1-phone');\r\n  const formPhonePopup = document.getElementById('form3-phone');\r\n  const formPhoneFooter = document.getElementById('form2-phone');\r\n\r\n  const formMessageFooter = document.getElementById('form2-message');\r\n\r\n\r\n\r\n\r\n  const numExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    });\r\n  };\r\n\r\n  const textExam = (input) => {\r\n    input.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яё\\ \\s]/i, '');\r\n\r\n        if (e.target.value != '') {\r\n          e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);\r\n      }\r\n    });\r\n  };\r\n\r\n  const emailExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^a-z@-_.!~*'\\s]/i, '');\r\n    });\r\n  };\r\n\r\n  const phoneExam = (input) => {\r\n    input.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^0-9-()\\+\\s]/, '');\r\n        if(e.target.value.length < 11) {\r\n          return false;\r\n        }\r\n    });\r\n  };\r\n\r\n  const messageExam = (input) => {\r\n    input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^?!:;\",.а-яё0-9\\s]/i, '');\r\n    });\r\n  };\r\n\r\nnumExam(calcSquare);\r\nnumExam(calcCount);\r\nnumExam(calcDay);\r\n\r\ntextExam(formNameHead);\r\ntextExam(formNamePopup);\r\ntextExam(formNameFooter);\r\n\r\nemailExam(formEmailHead);\r\nemailExam(formEmailPopup);\r\nemailExam(formEmailFooter);\r\n\r\nphoneExam(formPhoneHead);\r\nphoneExam(formPhonePopup);\r\nphoneExam(formPhoneFooter);\r\n\r\nmessageExam(formMessageFooter);\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({timing, draw, duration}) {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    \r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); \r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menuburg.js":
/*!*****************************!*\
  !*** ./modules/menuburg.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n'use sctrict';\r\nconst menuburg = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const body = document.querySelector('body');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = document.querySelector('.close-btn');\r\n  const menuItems = document.querySelectorAll('ul>li>a');\r\n\r\n  const closeMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n  body.addEventListener('click', (e) => {\r\n    if(e.target.closest('.menu')) {\r\n      closeMenu();\r\n    } else if(!e.target.closest('menu') || e.target.closest('.close-btn')) {\r\n      menu.classList.remove('active-menu');\r\n      \r\n    }\r\n  });\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', closeMenu));\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuburg);\n\n//# sourceURL=webpack:///./modules/menuburg.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const popupBtn = document.querySelectorAll('.popup-btn');\r\n\r\n  modal.style.opacity = 0;\r\n\r\n  \r\n  popupBtn.forEach(button => {\r\n    button.addEventListener('click', () => {\r\n        if (document.body.clientWidth > 768) {\r\n          modal.style.display = 'block';\r\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 1000,\r\n            timing(timeFraction) {\r\n              return timeFraction;\r\n            },\r\n            draw(progress) {\r\n              modal.style.opacity = progress;\r\n            }\r\n          });\r\n        } else {\r\n          modal.style.display = 'block';\r\n        }\r\n    });\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))\r\n    modal.style.display = 'none';\r\n  });\r\n\r\n  \r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({formId, someElem = []}) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement('div');\r\n  const loadText = 'Загрузка...';\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Выш запрос отправлен! Наш менеджер с вами свяжется!';\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    list.forEach(input => {\r\n      if(input.value.length >= 11 && input.type == 'tel') {\r\n        success = true;\r\n      } else {\r\n        success = false;\r\n      }\r\n    });\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body:  JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n    }).then(res => res.json());\r\n  };\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n    someElem.forEach(e => {\r\n      const elem = document.getElementById(e.id);\r\n\r\n     if(e.type === 'block'){\r\n      formBody[e.id] = elem.textContent;\r\n     }else if(e.type === 'input') {\r\n      formBody[e.id] = elem.value;\r\n     }\r\n    });\r\n\r\n    if(validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(date => {\r\n          statusBlock.textContent = successText;\r\n\r\n          formElements.forEach(input => {\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch(error => {\r\n          statusBlock.textContent = successText;\r\n        });\r\n    } else {\r\n      statusBlock.textContent = errorText;\r\n      \r\n    }\r\n  };\r\n\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error ('Верните форму');\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n  \r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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