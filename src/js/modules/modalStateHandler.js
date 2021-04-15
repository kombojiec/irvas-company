
import {checkNumInputs} from '../utiles';

const modalStateHandler = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function handleInputs(event, inputs, props){
    inputs.forEach((input, i) => {
      input.addEventListener(event, () => {
        switch(input.nodeName){
          case 'SPAN':
            state[props] = i;
            break;
          case 'INPUT':
            if(input.getAttribute('type') == 'checkbox'){
              i == 0? state[props] = 'Холодный': state[props] = 'Тёплый';
              inputs.forEach((input, index) => {
                if(index != i) input.checked = false;
              })
            }else{
              state[props] = input.value;
            }
            break;
          case 'SELECT':
            state[props] = input.value;
            break;
        }
      })
    })
  }

  handleInputs('click', windowForms, 'form');
  handleInputs('input', windowWidth, 'width');
  handleInputs('input', windowHeight, 'height');
  handleInputs('change', windowType, 'type');
  handleInputs('change', windowProfile, 'profile');
  
}

export default modalStateHandler;