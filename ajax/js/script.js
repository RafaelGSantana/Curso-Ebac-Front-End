const main = document.getElementById('main');
const userInput = document.getElementById('username');

const baseURL = 'https://api.github.com/users';
let text = '';

function getUser(user) {
   fetch(`${baseURL}/${user}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8'
      }
   })
      .then((response) => response.json())
      .then((data) => {
         text += `${data.name} possui ${data.public_repos} repositórios públicos no GitHub
         como ${data.login}<br>`
         main.innerHTML = text;
      }).catch((error) => console.error('Erro: ', error.message || error))
}

userInput.addEventListener('focusout', function(event) {
   getUser(event.target.value);
})
