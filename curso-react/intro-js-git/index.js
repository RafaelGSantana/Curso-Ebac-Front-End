/*1º*/document.getElementById("paragraph").innerHTML = 'Hello World';
/*2º*/document.getElementsByClassName("p1")[0].innerHTML = 'Hello World';
/*3º*/document.getElementsByTagName('p')[3].innerHTML = 'Hello World';
/*4º*/document.getElementsByName('p')[0].innerHTML = 'Hello World';

/*5º*/
let h1 = document.createElement('h1');
h1.innerHTML = 'Hello World';
document.getElementById('body').appendChild(h1);

/*6º*/
let p1 = document.createTextNode("Hello World");
document.getElementById('body').appendChild(p1);

/*7º*/
document.querySelector('p').innerHTML = 'Hello World';

/*8º*/
document.write('<h3>Hello World</h3>');

/*9º*/
document.writeln('Hello World');

