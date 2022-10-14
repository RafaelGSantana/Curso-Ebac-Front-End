import './styles.scss';
import img from './matrix.jpg';

function titleComponent() {
   const elementH1 = document.createElement('h1');
   elementH1.innerHTML = 'Hello World2';
   elementH1.classList.add('title');
   return elementH1;
}

function imageComponent() {
   const elementImg = new Image();
   elementImg.src = img;
   return elementImg;

}

document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())