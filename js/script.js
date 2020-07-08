'use-strict';

window.addEventListener('DOMContentLoaded', () => {

  const html = document.querySelector('html'),
        burgerMenu = document.querySelector('.burger'),
        burgerMenuBtn = burgerMenu.querySelector('.burger__button'),
        promoCardButton = document.querySelector('.promo__card-btn'),
        promoCardText = document.querySelector('.promo__card-text');

  const toggleBurgerMenu = () => {
    burgerMenuBtn.addEventListener('click', () => {
      burgerMenu.classList.toggle('burger_show');
      burgerMenuBtn.classList.toggle('burger__button_toggled');
      html.classList.toggle('freezed');
    });
  };
  toggleBurgerMenu();

  const showCardTextBlock = () => {
    promoCardButton.addEventListener('mouseenter', () => {
      promoCardText.classList.add('promo__card-text_visible');
    });
    promoCardButton.addEventListener('mouseleave', () => {
      promoCardText.classList.remove('promo__card-text_visible');
    });
  };
  showCardTextBlock();

  const activateParallaxScenes = () => {
    let parallaxScenes = document.querySelectorAll('.promo__scene');

      parallaxScenes.forEach(item => {
        new Parallax(item, {
          clipRelativeInput: true
        });
      });
  };
  activateParallaxScenes();
});