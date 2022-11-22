const user01 = new Object();
user01.id = 01;
user01.name = "Rafael";
user01.age = 32;

const user02 = new Object();
user02.id = 02;
user02.name = "Felipe";
user02.age = 29;

const user03 = new Object();
user03.id = 03; 
user03.name = "Júlia";
user03.age = 33;

const car01 = new Object();
car01["marca"] = "Nissan";

const car02 = new Object();
car01["marca"] = "Citroen";

// console.log(Object.keys(user01));
// console.log(Object.values(user01));
// console.log(Object.entries(user01));

user01.age = user01.age + 1;
// console.log(Object.entries(user01));

// Define uma propriedade, acrescentando propriedades específicas 
Object.defineProperty(user01, 'cpf', {
   enumerable: true, // define que propriedade deverá ser listada
   writable: false, // define propriedade como imutável, não pode ser alterada ou reescrita
   value: '000.000.000-00' // define o valor da propriedade
});

Object.defineProperty(user01, 'pass', {
   enumerable: false, // define propriedade como não listada (caso de informação sensível)
   value: 123456 // define o valor da propriedade
});

console.log(Object.entries(user01))

user03.filhos = [
   'Maria'
]

console.log(Object(user03))