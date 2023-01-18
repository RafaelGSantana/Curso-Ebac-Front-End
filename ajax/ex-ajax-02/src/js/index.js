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

// Função para preencher dados do endereço a partir dos dados retornados da api viacep.
function updateAddress(data) {
   if (!('erro' in data)) {
      rua.value = (data.logradouro);
      bairro.value = (data.bairro);
      cidade.value = (data.localidade);
      uf.value = (data.uf);
      mensagem.innerHTML = '';
   } else {
      mensagem.innerHTML = 'Cep inválido';
   }
}
let msg = [];
let markUp = '';

form.addEventListener('submit', function (event) {
   event.preventDefault();

   Array.from(inputsRequired).forEach(field => {
      let fieldState = isEmpty(field);

      if (fieldState) {
         msg.push(isEmpty(field))
      }
   });

   // Verifica se o retorno das funções checkIfEmailIsValid e checkIfCepIsValid
   // tem algum retorno. Se tiver, significa que o campo é inválido, então joga
   // a mensagem de retorno no array msg.
   checkIfEmailIsValid(email) && msg.push(checkIfEmailIsValid(email));
   checkIfCepIsValid(cep) && msg.push(checkIfCepIsValid(cep));

   console.log(msg)

   msg.forEach(item => {
      markUp += `<p>${item}</p>`
   })

   // console.log(msg)
   mensagem.innerHTML = markUp;

   // if (msg.length == 0) {
   //    form.submit();
   // }
});

// Valida cep e preenche endereço no evento focusout
cep.addEventListener('focusout', function () {
   const isCepValid = checkIfCepIsValid(cep);
   // Se isCepValid existir (não for falsy), significa que teve mensagem de erro,
   //  ou seja o cep é inválido, então joga o retorno de isCepValid no array msg
   if (isCepValid) {
      msg.push(isCepValid);
   } else {
      const script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAddress';
      document.body.appendChild(script);
   }

   // msg.forEach(item => {
   //    markUp += `<p>${item}</p>`
   // })
})
