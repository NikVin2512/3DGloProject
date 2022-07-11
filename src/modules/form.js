'use strict';

const form = () => {
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');

  const formNameHead = document.getElementById('form1-name');
  const formNamePopup = document.getElementById('form3-name');
  const formNameFooter = document.getElementById('form2-name');

  const formEmailHead = document.getElementById('form1-email');
  const formEmailPopup = document.getElementById('form3-email');
  const formEmailFooter = document.getElementById('form2-email');

  const formPhoneHead = document.getElementById('form1-phone');
  const formPhonePopup = document.getElementById('form3-phone');
  const formPhoneFooter = document.getElementById('form2-phone');

  const formMessageFooter = document.getElementById('form2-message');




  const numExam = (input) => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
  };

  const textExam = (input) => {
    input.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^а-яё\ \s]/i, '');

        if (e.target.value != '') {
          e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
      }
    });
  };

  const emailExam = (input) => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-z@-_.!~*'\s]/i, '');
    });
  };

  const phoneExam = (input) => {
    input.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^0-9-()\+\s]/, '');
        if(e.target.value.length < 11) {
          return false;
        }
    });
  };

  const messageExam = (input) => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^?!:;",.а-яё0-9\s]/i, '');
    });
  };

numExam(calcSquare);
numExam(calcCount);
numExam(calcDay);

textExam(formNameHead);
textExam(formNamePopup);
textExam(formNameFooter);

emailExam(formEmailHead);
emailExam(formEmailPopup);
emailExam(formEmailFooter);

phoneExam(formPhoneHead);
phoneExam(formPhonePopup);
phoneExam(formPhoneFooter);

messageExam(formMessageFooter);

};


export default form;