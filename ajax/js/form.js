const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const cep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');
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

function checkIfCepIsValid(element) {
   if (!element.value.match(/^[0-9]{8}$/)) {
      return `Digite um cep válido`;
   } else {
      return ''
   }

}

function updateAddress(data) {
   if (!('erro' in data)) {
      rua.value = (data.logradouro);
      bairro.value = (data.bairro);
      cidade.value = (data.localidade);
      uf.value = (data.uf);
      mensagem.innerHTML = '';
   } else {
      `Cep não encontrado`
   }
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
      msg.push(isEmailValid);
   }

   const isCepValid = checkIfCepIsValid(cep);
   if (isCepValid) {
      msg.push(isCepValid);
   } else {
      const script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAddress';
      document.body.appendChild(script);
   }



   msg.forEach(item => {
      markUp += `<p>${item}</p>`
   })
   mensagem.innerHTML = markUp;

   // if (msg.length == 0) {
   //    form.submit();
   // }
})