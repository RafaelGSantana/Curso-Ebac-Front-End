import '../styles.scss';

const formulario = document.getElementById('form');
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

// Validação do formulário + mensagem de sucesso / erro + reset do form
formulario.addEventListener('submit', function (event) {
   event.preventDefault();

   const inputGroup = formulario.querySelectorAll(".input-group");

   const formIsValid = [...inputGroup].every(input => {
      return (input.className === "input-group success");
   });

   const formIsNotValid = [...inputGroup].find(input => {
      return (input.className === "input-group erro");
   });

   const emptyFields = [...inputGroup].filter(input => {
      return (
         input.className !== "input-group success" &&
         input.className !== "input-group erro"
      )
   })

   if (formIsValid) {
      alert("Formulário enviado");

      limpaCampos();
   } else if (formIsNotValid) {
      emptyFields.forEach(field => {
         const childrenOfInputGroup = field.children;
         const input = childrenOfInputGroup.item(1)
         setError(input, `O campo ${input.id} é obrigatório.`)
      })
      alert("Não foi possível fazer o cadastro. Por favor, verifique os campos destacados em vermelho!")
   } else {
      emptyFields.forEach(field => {
         const childrenOfInputGroup = field.children;
         const input = childrenOfInputGroup.item(1)
         setError(input, `O campo ${input.id} é obrigatório.`)
      })
      alert("Não foi possível fazer o cadastro.")
   }
});

// Funções que efetivam a validação dos campos
function checaNomeInput() {
   const nomeValue = nome.value;

   if (nomeValue === "") {
      setError(nome, "O nome de usuário é obrigatório!");
   } else {
      setSuccess(nome);
   }
}

function checaEmailInput() {
   const emailValue = email.value;

   if (emailValue === "") {
      setError(email, "O email é obrigatório!");
   } else if (!checaEmail(emailValue)) {
      setError(email, "Por favor, insira um e-mail válido");
   } else {
      setSuccess(email);
   }
}

function checaCepInput() {
   const cepValue = cep.value;

   if (cepValue === "") {
      setError(cep, "O cep é obrigatório!")
   } else if (!checaCep(cepValue)) {
      setError(cep, "Por favor, insira um cep válido");
   } else {
      let url = `https://viacep.com.br/ws/${cepValue}/json/`

      fetch(url).then(function (response) {
         response.json().then(function (data) {
            if (data.erro) {
               setError(cep, 'Cep não encontrado, por favor verifique o cep digitado.')
            } else {
               rua.value = (data.logradouro);
               bairro.value = (data.bairro);
               cidade.value = (data.localidade);
               uf.value = (data.uf);
               setSuccess(cep);
               setSuccess(rua);
               setSuccess(bairro);
               setSuccess(cidade);
               setSuccess(uf);
            }

         })
      })
   }
}

function checaRuaInput() {
   const ruaValue = rua.value;

   if (ruaValue === "") {
      setError(rua, "A rua é obrigatória!")
   } else {
      setSuccess(rua);
   }
}

function checaBairroInput() {
   const bairroValue = bairro.value;

   if (bairroValue === "") {
      setError(bairro, "O bairro é obrigatória!")
   } else {
      setSuccess(bairro);
   }
}

function checaCidadeInput() {
   const cidadeValue = cidade.value;

   if (cidadeValue === "") {
      setError(cidade, "A cidade é obrigatória!")
   } else {
      setSuccess(cidade);
   }
}

function checaUfInput() {
   const ufValue = uf.value;

   if (ufValue === "") {
      setError(uf, "O uf do estado é obrigatório!")
   } else if (!checaUf(ufValue)) {
      setError(uf, "Por favor, insira um uf válido");
   } else {
      setSuccess(uf);
   }
}

// Validação no evento dos inputs
nome.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaNomeInput();
});

email.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaEmailInput();
});

cpf.addEventListener('focusout', function (event) {
   event.preventDefault();

   // checaCpfInput();
});


cep.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaCepInput();
});

rua.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaRuaInput();
});

bairro.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaBairroInput();
});

cidade.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaCidadeInput();
});

uf.addEventListener('focusout', function (event) {
   event.preventDefault();

   checaUfInput();
});

// Funções auxiliares
function setError(input, message) {
   // pega o elemento pai do input
   const inputGroup = input.parentElement;

   // pega o elemento small
   const small = inputGroup.querySelector("small");

   // Adiciona mensagem de erro na tag small
   small.innerText = message;

   // Adiciona classe de erro no elemento
   inputGroup.className = "input-group erro"
}

function setSuccess(input) {
   // pega o elemento pai do input
   const inputGroup = input.parentElement;
   // Adiciona classe de sucesso no elemento
   inputGroup.className = "input-group success"
}

function checaEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   );
}

function checaCpf(cpf) {
   return /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$|^[0-9]{11}$/.test(cpf)
}

function checaCep(cep) {
   return /[0-9]{5}-[0-9]{3}$|^[0-9]{8}$/.test(cep)
}

function checaUf(uf) {
   return /rr|ap|am|pa|ac|ro|to|ma|pi|ce|rn|pe|pb|al|se|ba|mt|df|go|ms|mg|es|rj|sp|pr|sc|rs/i.test(uf)
}

function limpaCampos() {
   nome.value = "";
   email.value = "";
   cpf.value = "";
   cep.value = "";
   cidade.value = "";
   uf.value = "";

   nome.parentElement.classList.remove('success');
   email.parentElement.classList.remove('success');
   cpf.parentElement.classList.remove('success');
   cep.parentElement.classList.remove('success');
   cidade.parentElement.classList.remove('success');
   uf.parentElement.classList.remove('success');

}

