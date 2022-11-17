class Animal {

   constructor(especie){
       this.especie = especie
   }

   falar(){
       console.log(this.especie + ' fala ')
   }

   comer(){
       console.log(this.especie + ' come ')
   }

   dormir(){
       console.log(this.especie + ' dorme ')
   }

}

const animal = new Animal('animal')
animal.falar();
animal.comer();
animal.dormir();

class Cachorro extends Animal{
   falar(){
       console.log(this.especie + ' fala au au au')
   }

   comer(){
       console.log(this.especie + ' come ração ')
   }
}

const cachorro1 = new Cachorro('cachorro')
cachorro1.falar();
cachorro1.comer();
cachorro1.dormir();