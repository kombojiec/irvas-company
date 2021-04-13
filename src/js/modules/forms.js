
const forms = () => {

  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone');  
  const message = {
    loading: 'Идёт отпрака данных...',
    sucsess: 'Спасибо, мы с вами свяжемся',
    fail: 'Спасибо, мы с вами свяжемся'
  }

  phoneInputs.forEach(input => {
    input.addEventListener('input', () =>{
      input.value = input.value.replace(/\D/, '');
    })
  })

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    })

    return await res();
  }

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);
      statusMessage.textContent = message.loading;
      // const data = new FormData(form);
      const inputs = form.querySelectorAll('input');
      const data = {};
      inputs.forEach(input => {
        data[input.name] = input.value;
      })
      console.log(data);
      postData('asssets/server.php', data)
        .then(res => {
          console.log(res);
          status.message.textContent = message.sucsess;
        })
        .catch(() => {
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