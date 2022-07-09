'use sctrict';
const menuburg = () => {
  const menuBtn = document.querySelector('.menu');
  const body = document.querySelector('body');
  const menu = document.querySelector('menu');
  const closeBtn = document.querySelector('.close-btn');
  const menuItems = document.querySelectorAll('ul>li>a');

  const closeMenu = () => {
    menu.classList.toggle('active-menu');
  };
  body.addEventListener('click', (e) => {
    console.log(e.target);

    if(e.target.closest('.menu')) {
      closeMenu();
    } else if(!e.target.closest('menu') || e.target.closest('.close-btn')) {
      menu.classList.remove('active-menu');
      
    }
  });
  menuItems.forEach(menuItem => menuItem.addEventListener('click', closeMenu));
};



export default menuburg;