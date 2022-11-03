import '../scss/styles.scss'
import imageBuilding from '../assets/building.jpg';
import imageDog from '../assets/cute-dog.jpg';

const elemRoot = document.getElementById('root');
elemRoot.classList.add('container');

// Define o elemento <img src={imageBuilding} alt="" />
const elementImageBuilding = new Image();
elementImageBuilding.src = imageBuilding;

// Coloca o elemento 'elementImageBuilding' dentro da div#building
document.querySelector("#building").appendChild(elementImageBuilding);

// Define o elemento <img src={imageDog} alt="" />
const elementImageDog = new Image();
elementImageDog.src = imageDog;

// Coloca o elemento 'imageDog' dentro da div#building
document.querySelector("#dog").appendChild(elementImageDog);

