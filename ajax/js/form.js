const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const cep = document.querySelector('#cep');
const mensagem = document.querySelector('#message');
const inputsRequired = document.getElementsByClassName('required');


function isEmpty(element) {
   return element.value.length < 1
      ?
      `O campo <strong>${element.name}</strong> é obrigatório para o cadastro.`
      :
      '';
}

function checkIfEmailIsValid(element) {
   return element.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ? ''
      : `Digite um <strong>e-mail</strong> válido`;
}

form.addEventListener('submit', function (event) {
   event.preventDefault();

   let msg = [];
   let markUp = '';

   Array.from(inputsRequired).forEach(field => {
      let fieldState = isEmpty(field);

      if (fieldState) {
         msg.push(isEmpty(field))
      }
   });

   const isEmailValid = checkIfEmailIsValid(email);
   if (isEmailValid) {
      msg.push(isEmailValid)
   }

   msg.forEach(item => {
      markUp += `<p>${item}</p>`
   })
   mensagem.innerHTML = markUp;
})