import './styles.scss';
import img from './matrix.jpg';

function rootStyle() {
   const elementRoot = document.getElementById('root');
   elementRoot.classList.add('container');
   return elementRoot;
}

function titleComponent() {
   const elementH1 = document.createElement('h1');
   elementH1.innerHTML = 'Hello World';
   elementH1.classList.add('title');
   return elementH1;
}

function imageComponent() {
   const elementImg = new Image();
   elementImg.src = img;
   return elementImg;

}

rootStyle().appendChild(titleComponent());
rootStyle().appendChild(imageComponent());