function calcularMedia ( notas ) {
  let soma = 0;
  for(c = 0; c < notas.length; c++) {
    soma += notas[c];
  }

  media = soma / notas.length;

  return media
}

let media;

function aprovacao (valores) {
  let media = calcularMedia( valores);

  let condicao = media >= 8 ? "aprovado" : "reprovado";

  return "Média: " + media + " - Resultado: " + condicao;
}

/**
 *  Formulário de envio de dados para cálculo de média
 */

const formulario1 = document.getElementById('formulario');

if (formulario1) // Os eventos abaixo só serão executados, se o formulario1 existir

  formulario1.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if(this.getAttribute('class').match(/erro/)) {
      return false;
    }
    
    let dataForm = new FormData(this);

    let valores = [];

    for (let key of dataForm.keys()) {

      let numero = dataForm.get(key).match(/\d*/) ? Number(dataForm.get(key)) : 0;


      // Checa se valor passado é um número, se for, inclui no array 'valores'.
      if (!isNaN(numero)) {
        valores.push(numero);
      }
    }

    document.getElementById('resultado').innerHTML = aprovacao(valores);
  });

  /**
   * Validação de campos
   */
  function validaCampo(elemento) {

    elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      if (this.value == "") {
        document.querySelector('.mensagem').innerHTML = "Preencha os campos destacados, corretamente.";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      } else {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      }
    });
  }

  function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      let numero = this.value;

      if (numero.match(/[0-9]*/) && numero >= 0 && numero <=10 && numero != "") {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = "Preencha os campos destacados, corretamente.";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;

      }
    });
  }

  function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const formatoEmailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z])?/i;
      if(this.value.match(formatoEmailValido)) {
        console.log(this.value);
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = "Preencha corretamente o e-mail";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }

    })
  }

  function validaCEP (elemento) {
    elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const cepValido = this.value.match(/^[\d]{5}-[\d]{3}|^[\d]{8}/);

      if(this.value.match(cepValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = "Preencha corretamente o cep";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }
    })
  }

  function validaUf(elemento) {
    elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const formatoUfValido = /rr|ap|am|pa|ac|ro|to|ma|pi|ce|rn|pe|pb|al|se|ba|mt|df|go|ms|mg|es|rj|sp|pr|sc|rs/;
      if(this.value.match(formatoUfValido)) {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.mensagem').innerHTML = "Preencha corretamente o uf do seu estado";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }

    })
  }

  let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
  let camposNumericos = document.querySelectorAll('input.numero');
  let campoEmail = document.querySelectorAll('input.email');
  let campoUf = document.querySelectorAll('input.uf');
  let campoCep = document.querySelectorAll('input.cep');

  for(let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
  }

  for(let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
  }

  for(let emFoco of campoEmail) {
    validaEmail(emFoco);
  }

  for(let emFoco of campoUf) {
    validaUf(emFoco);
  }
  
  for(let emFoco of campoCep) {
    validaCEP(emFoco);
  }

