import {checkNumInputs} from '../utiles';

const forms = (state) => {

  const forms = document.querySelectorAll('form');
  const allInputs = document.querySelectorAll('input');
  const popups = document.querySelectorAll('[data-modal');
  const message = {
    loading: 'Идёт отпрака данных...',
    sucsess: 'Спасибо, мы с вами свяжемся',
    fail: 'Упс... Что-то пошло не так...'
  }

  checkNumInputs('input[name="user_phone');

  const getData = async url => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'GET',
    })
  }

  const postData = async (url, data) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      }, 
      method: 'POST',
      body: JSON.stringify(data)
    })

    return await res;
  }

  forms.forEach(form => {

    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);
      statusMessage.textContent = message.loading;

      let data = {};
      inputs.forEach(input => {
        data[input.name] = input.value;
      })
      
      if(form.getAttribute('data-form') == 'end'){
        for(let key in state){
          data[key] = state[key];
        }
      }

      postData('https://irvas-company-default-rtdb.firebaseio.com/orders.json', data)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.sucsess;
        })
        .catch((error) => {
          console.log(error)
          statusMessage.textContent = message.fail;
        })
        .finally(() => {
          data = {};
          allInputs.forEach(input => input.value = '');
          setTimeout(() => {
            statusMessage.remove();
            setTimeout(() => {
              popups.forEach(popup => {
                popup.style.display = 'none';
                document.body.classList.remove('modal-open');
              })
            }, 500)
          }, 1000)
        })
      })
  })

}

export default forms;

// FireBase   https://irvas-company-default-rtdb.firebaseio.com/orders.json