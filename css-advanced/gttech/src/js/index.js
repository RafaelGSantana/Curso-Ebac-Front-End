import '../scss/styles.scss';

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
   event.preventDefault();

   if (this.getAttribute('class').match(/error/)) {
      document.querySelector('.mensagem').innerHTML = "* Os campos destacados em vermelho são obrigatórios.";
      return false;
   } else if (this.getAttribute('class').match(/empty/)) {
      document.querySelector('.mensagem').innerHTML = "* Os campos destacados em vermelho são obrigatórios.";
      
      for(const child of this) {
         if(child.classList.contains('required')) {
            child.classList.add('error')
         }
      }

      return false;
   } else {
      document.querySelector('.mensagem').innerHTML = "";
      alert("Recebemos a solicitação. Em breve retornaremos o contato, no e-mail indicado.")
   }
});

function validaCampo(element) {

   element.addEventListener('focusout', function (event) {
      event.preventDefault();

      if (this.classList.contains('required') && this.value == "") {
         this.classList.add('error');
         this.parentNode.classList.add('error');
         this.classList.remove('success');
         this.parentNode.classList.remove('success');
         return false;
      } else {
         this.classList.remove('error');
         this.parentNode.classList.remove('error');
         this.parentNode.classList.remove('empty');
         this.classList.add('success');
         this.parentNode.classList.add('success');
      }
   });
}

let camposObrigatorios = document.querySelectorAll('input.required');

for (let campo of camposObrigatorios) {
   validaCampo(campo);
}
