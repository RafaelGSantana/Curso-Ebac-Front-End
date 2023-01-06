import '../scss/styles.scss';

const main = document.getElementById('main');
const userInput = document.getElementById('username');
const usersContainer = document.getElementById('users-container')

const baseURL = 'https://api.github.com/users';
let user = '';

function getUser(user) {
   fetch(`${baseURL}/${user}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8'
      }
   })
      .then((response) => response.json())
      .then(data => {
         user += `
            <div class="user">
               <img src="${data.avatar_url}" alt="Foto do usuário" class="user-avatar">
               <p class="user-name">${data.login}</p>
               <p class="user-company">${data.company}</p>
               <p class="user-bio">${data.bio}</p>
               <a href="https://github.com/RafaelGSantana">Ver perfil</a>
            </div>
         `
         usersContainer.innerHTML = user;
      }).catch((error) => console.error('Erro: ', error.message || error))
}

userInput.addEventListener('focusout', function (event) {
   getUser(event.target.value);
})
