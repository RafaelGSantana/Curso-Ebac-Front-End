import '../scss/styles.scss';

const button = document.getElementById('button');
const userInput = document.getElementById('username');
const usersContainer = document.getElementById('users-container')

const baseURL = 'https://api.github.com/users';
let users = '';
let user = '';

userInput.addEventListener('focusout', function (e) {
   user = e.target.value;
})

button.addEventListener('click', function (event) {
   event.preventDefault()
   fetch(`${baseURL}/${user}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json; charset=UTF-8'
      }
   })
      .then((response) => response.json())
      .then(data => {
         users += `
            <div class="user">
               <img src="${data.avatar_url}" alt="Foto do usuário" class="user-avatar">
               <div class="user-info">
                  <p class="user-name">${data.login}</p>
                  <p class="user-company" maxlenght="50">${data.company}</p>
                  <p class="user-bio">${data.bio}</p>
               </div>
               <a href="${data.html_url}" target="_blank">Ver perfil</a>
            </div>
         `
         usersContainer.innerHTML = users;
         console.log(data)
      }).catch((error) => console.error('Erro: ', error.message || error))
})
