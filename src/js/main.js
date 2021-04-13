import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', ()=>{

  modal();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  forms();


  //       <<=============== DOMContenLoad ===============>>
})
