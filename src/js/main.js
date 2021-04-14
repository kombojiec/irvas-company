import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import modalStateHandler from './modules/modalStateHandler';
import timer from './modules/timer';
import imagePopup from './modules/imagePopup'

window.addEventListener('DOMContentLoaded', ()=>{

  const modalState = {};

  modal();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  forms(modalState);
  modalStateHandler(modalState);
  timer();
  imagePopup();


  //       <<=============== DOMContenLoad ===============>>
})
