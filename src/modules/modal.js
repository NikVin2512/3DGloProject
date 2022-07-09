'use strict';

const modal = () => {
  const modal = document.querySelector('.popup');
  const closeBtn = document.querySelector('.popup-close');
  const popupBtn = document.querySelectorAll('.popup-btn');
  let count = 0;
  let id;
  let idNon

  modal.style.opacity = 0;

  const animate = () => {
    count++;
    id = requestAnimationFrame(animate);
    
    if(count < 50) {
      modal.style.opacity = count * 0.025;
    }  else  if(count >= 50) {
      cancelAnimationFrame(id);
    }  
    console.log(count);
  };

  popupBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (document.body.clientWidth > 768) {
          modal.style.display = 'block';
          animate();
        } else {
          modal.style.display = 'block';
        }
        

    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    count = 0;

  });

  
};


export default modal;