const submit = document.getElementById('submit');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const endereco = document.getElementById('endereco');
const bairro = document.getElementById('bairro');
const complemento = document.getElementById('complemento');
const telefone = document.getElementById('telefone');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const cep = document.getElementById('cep');
const info = document.getElementById('info');
const promo = document.getElementById('promo');

submit.addEventListener('click', () => {
   if (nome.value === "") {
      nome.setCustomValidity('Por favor, preencha este campo!');
   } else {
      nome.setCustomValidity('');
   }

   if (email.validity.typeMismatch) {
      email.setCustomValidity('Por favor, insira um e-mail válido!');
   } else if (email.value === "") {
      email.setCustomValidity('Por favor, preencha este campo!');
   } else{
      email.setCustomValidity('');
   }

   if (endereco.value === "") {
      endereco.setCustomValidity('Por favor, preencha este campo!');
   } else {
      endereco.setCustomValidity('');
   }

   if (bairro.value === "") {
      bairro.setCustomValidity('Por favor, preencha este campo!');
   } else {
      bairro.setCustomValidity('');
   }

   if (complemento.value === "") {
      complemento.setCustomValidity('Por favor, preencha este campo!');
   } else {
      complemento.setCustomValidity('');
   }

   if (telefone.value === "") {
      telefone.setCustomValidity('Por favor, preencha este campo!');
   } else if (!telefone.value.match(/^[0-9]{11}$/)) {
      telefone.setCustomValidity('Por favor, preencha um telefone válido, apenas com números!');
   }  else {
      telefone.setCustomValidity('');
   }

   if (cidade.value === "") {
      cidade.setCustomValidity('Por favor, preencha este campo!');
   } else {
      cidade.setCustomValidity('');
   }

   if (estado.value === "") {
      estado.setCustomValidity('Por favor, preencha este campo!');
   } else {
      estado.setCustomValidity('');
   }

   if (cep.value === "") {
      cep.setCustomValidity('Por favor, preencha este campo!');
   } else if (!cep.value.match(/^[0-9]{8}$/)) {
      cep.setCustomValidity('Por favor, preencha um cep válido, apenas com números!');
   } else {
      cep.setCustomValidity('');
   }

   if (info.value === "") {
      info.setCustomValidity('Por favor, preencha este campo!');
   } else {
      info.setCustomValidity('');
   }
})
