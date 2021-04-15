
const modal = () => {

  function bindModal(openButtonSelector, modalSelector, closeButtonSelector, closeModalOverlay = true){

    const openButtons = document.querySelectorAll(openButtonSelector);
    const modal = document.querySelector(modalSelector);
    const closeButton = document.querySelector(closeButtonSelector); 
    const popups = document.querySelectorAll('[data-modal');
    let scrollWidth = calculateScrollWidth();
    
    
    openButtons.forEach(button => {
      button.addEventListener('click', () => {        
        modal.style.display = 'block'
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;
      })
    })
    
    closeButton.addEventListener('click', event => {
      if(event.target){
        event.preventDefault();
      }
      closeModal();
    })

    modal.addEventListener('click', event => {
      if(!closeModalOverlay){
        return
      }
      if(event.target == event.currentTarget){
      closeModal();
      }
    })
    
    function closeModal(){
      popups.forEach(popup => {
        popup.style.display = 'none';
      })
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0`;
    }
    
  } // <<== bindModal==>>

  function openModalByTime(selector, time){
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block'
      document.body.classList.add('modal-open');
    }, time)
  }

  function calculateScrollWidth(){
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.overflowY = 'scroll';
    box.style.visability = 'hidden';

    document.body.appendChild(box);
    let scrollWidth = box.offsetWidth - box.clientWidth;
    box.remove();
    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close', false);
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // openModalByTime('.popup', 60*1000)

}

export default modal;