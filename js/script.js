document.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.menu'), 
        links = document.querySelector('.links'), 
        arrow = links.querySelector('.links__arrow');

  links.addEventListener('click', () => {
    menu.classList.toggle('none');
    if (!menu.classList.contains('none')) {
      arrow.style.transform = 'rotate(180deg)';
      arrow.style.transition = '0.4s all';
    } else if (menu.classList.contains('none')) {
      arrow.style.transform = 'rotate(0)';
      arrow.style.transition = '0.4s all';
    }
  });
});