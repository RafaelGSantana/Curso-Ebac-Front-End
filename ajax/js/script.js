const main = document.getElementById('main');
const userInput = document.getElementById('username');

const baseURL = 'https://api.github.com/users';
// let user = 'RafaelGSantana';

function getUser(user) {
   fetch(`${baseURL}/${user}`)
      .then((response) => response.json())
      .then((data) => {
         main.innerHTML = `${data.name} possui ${data.public_repos} repositórios públicos no GitHub
         como ${data.login}`
      }).catch((error) => console.error('Erro: ', error.message || error))
}

userInput.addEventListener('focusout', function(event) {
   getUser(event.target.value);
})
