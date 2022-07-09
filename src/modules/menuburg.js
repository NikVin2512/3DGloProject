'use sctrict';
const menuburg = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = document.querySelector('.close-btn');
  const menuItems = document.querySelectorAll('ul>li>a');

  const closeMenu = () => {
    menu.classList.toggle('active-menu');
  };


  menuBtn.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);
  menuItems.forEach(menuItem => menuItem.addEventListener('click', closeMenu));
};



export default menuburg;