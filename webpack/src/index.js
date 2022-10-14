function titleComponent() {
   const elementH1 = document.createElement('h1');
   elementH1.innerHTML = 'Hello World';

   return elementH1;
}

document.body.appendChild(titleComponent())