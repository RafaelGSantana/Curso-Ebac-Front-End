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

submit.addEventListener('click', (event) => {
   if (nome.value === "") {
      nome.setCustomValidity('Por favor, preencha este campo com seu nome!');
   } else {
      nome.setCustomValidity('');
   }
   if (email.validity.typeMismatch) {
      email.setCustomValidity('Por favor, insira um e-mail válido!');
   } else if (email.value === "") {
      email.setCustomValidity('Por favor, preencha este campo com seu e-mail Ex.: example@email.com!');
   } else{
      email.setCustomValidity('');
   }

   if (endereco.value === "") {
      endereco.setCustomValidity('Por favor, preencha este campo com o endereço em que reside!');
   } else {
      endereco.setCustomValidity('');
   }

   if (bairro.value === "") {
      bairro.setCustomValidity('Por favor, preencha este campo com o bairro em que reside!');
   } else {
      bairro.setCustomValidity('');
   }

   if (complemento.value === "") {
      complemento.setCustomValidity('Por favor, preencha o complemento do seu endereço!');
   } else {
      complemento.setCustomValidity('');
   }

   if (telefone.value === "") {
      telefone.setCustomValidity('Por favor, preencha este campo com seu telefone, informando apenas números. Ex.: 11999999999!');
   } else if (!telefone.value.match(/^[0-9]{11}$/)) {
      telefone.setCustomValidity('Por favor, preencha um telefone válido, apenas com números!');
   }  else {
      telefone.setCustomValidity('');
   }

   if (cidade.value === "") {
      cidade.setCustomValidity('Por favor, preencha este campo com a cidade em que reside!');
   } else {
      cidade.setCustomValidity('');
   }

   if (estado.value === "") {
      estado.setCustomValidity('Por favor, preencha este campo com a UF do estado em que reside!');
   } else {
      estado.setCustomValidity('');
   }
  
   if (cep.value === "") {
      cep.setCustomValidity('Por favor, preencha este campo com o seu cep, informando apenas números!');
   } else if (!cep.value.match(/^[0-9]{8}$/)) {
      cep.setCustomValidity('Por favor, preencha um cep válido, apenas com números!');
   } else {
      cep.setCustomValidity('');
   }

   if (info.value === "") {
      info.setCustomValidity('Para continuar, por favor insira alguma informação!');
   } else {
      info.setCustomValidity('');
   }
});
