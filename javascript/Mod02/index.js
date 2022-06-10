function checkInputs(inputs) {
  let filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

// Se número for negativo, reseta o input.value, o que mantém o button desabilitado.
function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

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

// Adicionando função no evento de 'submit'do formuláro
document.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  
  let form = document.getElementById('formulario');

  // INÍCIO
  // Serializa o formulário, ou seja, vai transformar os dados do formulário num objeto, para serem trabalhados depois.
  let dataForm = new FormData(form);
  console.log(dataForm); // Traz no console "FormData {}" 

  let object = {}
  let valores = [];

  for (let key of dataForm.keys()) {
    object[key] = dataForm.get(key);

    valores.push(parseInt(dataForm.get(key)));
  }
  // FIM
  console.log(valores)
  console.log(object); // Traz no console "{key: value}, value em string, ex.: { n1: '98' }"

  document.getElementById('resultado').innerHTML = aprovacao(valores);
  


})


