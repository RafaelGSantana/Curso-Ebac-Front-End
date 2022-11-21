const calcularMedia = (notas) => {
   let soma = 0;
   for (let c = 0; c < notas.length; c++) {
      soma += notas[c];
   }

   media = soma / notas.length;

   return media;
}

let media

const aprovacao = (notas) => {
   const media = calcularMedia(notas); // escopo da função

   const condicao = media >= 8 ? 'aprovado' : 'reprovado';
   console.log(condicao)
   return `Média: ${media} - Resultado: ${condicao}`;
}

/*
 * Formulário envio de dados para cálculo da média
 */
const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
   formulario1.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (this.getAttribute('class') && this.getAttribute('class').match(/erro/)) {
         return false;
      }

      const dados = new FormData(this);

      const notas = [];

      for (const key of dados.keys()) {
         const numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

         if (!isNaN(numero)) {
            notas.push(numero);
         }
      }

      console.log(notas);

      let texto = aprovacao(notas)

      document.getElementById('resultado').innerHTML = texto;
   });
}

// Funçoes de validação de campos
const validaCampo = (elemento) => {
   elemento.addEventListener('focusout', function (event) {
      event.preventDefault();

      if (this.value == '') {
         document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
         this.classList.add('erro');
         this.parentNode.classList.add('erro');
         return false;
      }
      document.querySelector('.mensagem').innerHTML = '';
      this.classList.remove('erro');
      this.parentNode.classList.remove('erro');
   });
}

const validaCampoNumerico = (elemento) => {
   elemento.addEventListener('focusout', function (event) {
      event.preventDefault();

      const numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, '') : this.value;

      if (numero != '' && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
         document.querySelector('.mensagem').innerHTML = '';
         this.classList.remove('erro');
         this.parentNode.classList.remove('erro');
      } else {
         document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
         this.classList.add('erro');
         this.parentNode.classList.add('erro');
         return false;
      }
   });
}

const validaEmail = (elemento) => {
   elemento.addEventListener('focusout', function (event) {
      event.preventDefault();

      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
      if (this.value.match(emailValido)) {
         document.querySelector('.mensagem').innerHTML = '';
         this.classList.remove('erro');
         this.parentNode.classList.remove('erro');
      } else {
         document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
         this.classList.add('erro');
         this.parentNode.classList.add('erro');
         return false;
      }
   });
}

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposNumericos = document.querySelectorAll('input.numero');
const camposEmail = document.querySelectorAll('input.email');

for (const emFoco of camposObrigatorios) {
   validaCampo(emFoco);
}

for (const emFoco of camposNumericos) {
   validaCampoNumerico(emFoco);
}

for (const emFoco of camposEmail) {
   validaEmail(emFoco);
}
