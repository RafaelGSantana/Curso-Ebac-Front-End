const submit = document.getElementById('submit');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const descricao = document.getElementById('descricao');

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

   if (descricao.value === "") {
      descricao.setCustomValidity('Para continuar, por favor descreva como podemos te ajudar!');
   } else {
      descricao.setCustomValidity('');
   }
});
