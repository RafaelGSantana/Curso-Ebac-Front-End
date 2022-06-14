// Se número for negativo, reseta o input.value, o que mantém o button desabilitado.
// function somenteNumeros(num) {
//     var er = /[^0-9.]/;
//     er.lastIndex = 0;
//     var campo = num;
//     if (er.test(campo.value)) {
//       campo.value = "";
//     }
// }

function calcularMedia ( notas ) {
  let soma = 0;
  for(c = 0; c < notas.length; c++) {
    soma += notas[c];
  }

  media = soma / notas.length;

  return media
}

let media; // escopo global

function aprovacao (valores) {
  let media = calcularMedia( valores); // escopo da função

  let condicao = media >= 8 ? "aprovado" : "reprovado";

  return "Média: " + media + " - Resultado: " + condicao;
}

// Funções recursivas - Chamar e reaproveitar a função, dentro dela mesmo

// Instância da função
function contagemRegressiva(num) {
  console.log(num);

  num--;

  if (num > 0) // Condição de saída if (num > 0), para evitar loop infinito 
  contagemRegressiva(num--);
}

/**
 *  Formulário de envio de dados para cálculo de média
 */

const formulario1 = document.getElementById('formulario');

formulario1.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  if(this.getAttribute('class').match(/erro/)) {
    return false;
  }
  
  let dataForm = new FormData(this); // this -> referencia o formulario document.getElementById('formulario')

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

    if (this.value.match(/[0-9]*/) && this.value >= 0 && this.value <=10 && this.value != "") {
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

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');

for(let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for(let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

