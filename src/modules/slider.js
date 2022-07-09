'use strict';

const slider = () => {  
    const sliderBlock = document.querySelector('.portfolio-content');
    const sliderItem = document.querySelectorAll('.portfolio-item');
    let dots;

    let portfolioDots = document.querySelector('.portfolio-dots');

    const timerInterval = 2000;  
    
    let currentSlide = 0;
    let interval;

    const addDot = () => {
      sliderItem.forEach((item, i) => {
        const li = document.createElement('li');
        if(i == 0){
          li.classList.add('dot-active');
        } 
        li.classList.add('dot');
        portfolioDots.append(li);
        dots = document.querySelectorAll('.dot');
      });
    };
    addDot();
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);

    };
    
    const autoSlide = () => {
      
      nextSlide(sliderItem, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
      currentSlide++;

      if(currentSlide >= sliderItem.length) {
        currentSlide = 0;
      }
      prevSlide(sliderItem, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
      interval = setInterval(autoSlide, timer);
      
    };

    const stopSlide = () => {
      clearInterval(interval);
    
   };
   sliderBlock.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.matches('.dot, .portfolio-btn')){
      return;
    }
    nextSlide(sliderItem, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');

    if(e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if(e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if(e.target.classList.contains('dot')) {
      dots.forEach((dot, i) => {
        if(e.target === dot) {
          currentSlide = i;
        }
      });
    }
      if(currentSlide >= sliderItem.length) {
        currentSlide = 0;
      }
      if(currentSlide < 0) {
        currentSlide = sliderItem.length - 1;
      }
    prevSlide(sliderItem, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
   });

   sliderBlock.addEventListener('mouseenter', (e) => {
    if(e.target.matches('.dot, .portfolio-btn')){
      stopSlide();
    }
   }, true);   

   sliderBlock.addEventListener('mouseleave', (e) => {
    if(e.target.matches('.dot, .portfolio-btn')){
      startSlide(timerInterval);
    }
  }, true);


  startSlide(timerInterval);
};

export default slider;