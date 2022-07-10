'use strict';

const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Выш запрос отправлен! Наш менеджер с вами свяжется!';

  const validate = (list) => {
    let success = true;

    // list.forEach(i => {
    //   if(!i.classList.contains('success')) {
    //     success = false;
    //   }
    // });
    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body:  JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };
  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    someElem.forEach(e => {
      const elem = document.getElementById(e.id);

     if(e.type === 'block'){
      formBody[e.id] = elem.textContent;
     }else if(e.type === 'input') {
      formBody[e.id] = elem.value;
     }
    });

    if(validate(formElements)) {
      sendData(formBody)
        .then(date => {
          statusBlock.textContent = successText;

          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = successText;
        });
    } else {
      console.log("error");
      
    }
  };


  try {
    if (!form) {
      throw new Error ('Верните форму');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }



};

export default sendForm;