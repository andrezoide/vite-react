const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  }

  const input = document.querySelector('input[name ="cpf"]');
  const inputPassword = document.querySelector('input[name ="password"]');
  const form = document.querySelector('form');

  const validadeInput = () => {
    if(!input.value) {
      //agarra o proximo elemento que é o erro la no HTML. Classlist pra remover o hidden do erro la no css
      input.nextElementSibling.classList.remove('error');
    }
  }

  form.addEventListener("submit", (e)=> {
    e.preventDefault();
    validadeInput();
  })