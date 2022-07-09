'use strict';

import {animate} from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');

  modal.style.opacity = 0;

  
  popupBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (document.body.clientWidth > 768) {
          modal.style.display = 'block';
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              modal.style.opacity = progress;
            }
          });
        } else {
          modal.style.display = 'block';
        }
    });
  });

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))
    modal.style.display = 'none';
  });

  
};


export default modal;