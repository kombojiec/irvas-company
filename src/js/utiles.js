
const checkNumInputs = (inputSelector) => {
const inputs = document.querySelectorAll(inputSelector);
inputs.forEach(input => {
  input.addEventListener('input', () =>{
    input.value = input.value.replace(/\D/, '');
  })
})
}

const setZero = (number) => {
  if(number >= 0  && number <= 9){
    return '0' + number;
  }else if(number > 9){
    return number;
  }else return '00';
}

export {checkNumInputs, setZero};