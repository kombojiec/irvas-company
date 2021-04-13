
const modal = () => {

  function bindModal(openButtonSelector, modalSelector, closeButtonSelector){

    const openButtons = document.querySelectorAll(openButtonSelector);
    const modal = document.querySelector(modalSelector);
    const closeButton = document.querySelector(closeButtonSelector); 


    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.style.display = 'block'
        document.body.classList.add('modal-open');
      })
    })
    
    closeButton.addEventListener('click', event => {
      if(event.target){
        event.preventDefault();
      }
      closeModal();
    })

    modal.addEventListener('click', event => {
      if(event.target == event.currentTarget){
      closeModal();
      }
    })
    
    function closeModal(){
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
    
  } // <<== bindModal==>>

  function openModalByTime(selector, time){
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block'
      document.body.classList.add('modal-open');
    }, time)
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // openModalByTime('.popup', 60*1000)

}

export default modal;