
const forms = () => {

  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone');  
  const message = {
    loading: 'Идёт отпрака данных...',
    sucsess: 'Спасибо, мы с вами свяжемся',
    fail: 'Упс... Что-то пошло не так...'
  }

  phoneInputs.forEach(input => {
    input.addEventListener('input', () =>{
      input.value = input.value.replace(/\D/, '');
    })
  })

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
    form.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);
      statusMessage.textContent = message.loading;
      const inputs = form.querySelectorAll('input');
      const data = {};
      inputs.forEach(input => {
        data[input.name] = input.value;
      })
      console.log(data);
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
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000)
        })
    })
  })

}

export default forms;

// BD   https://irvas-company-default-rtdb.firebaseio.com/orders/json