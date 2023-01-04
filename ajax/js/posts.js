// import fetch from 'node-fetch';

let _data = {
   title: 'teste de envio',
   body: 'loren ipsumsit dolor amet consectur',
   userId: 5
}

// Lista todas os dados
fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'GET',
   headers: {
      'Content-Type': 'application/json; charset=UTF-8'
   }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

// Envia dados
fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify(_data),
   headers: {
      'Content-Type': 'application/json; charset=UTF-8'
   }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))