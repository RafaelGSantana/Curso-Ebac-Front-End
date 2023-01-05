import '../scss/styles.scss';

/**
 * function to select the video and display its enlarged format
 */
document.querySelectorAll('.video-container video').forEach(item => {
   item.onclick = () => {
      document.querySelector('.enlarged-video').style.display = 'block';
      document.querySelector('.enlarged-video video').src = item.getAttribute('src');
   }
});

/**
 * function to stop displaying the enlarged video
 */
document.querySelector('.enlarged-video span').onclick = () => {
   document.querySelector('.enlarged-video').style.display = 'none';
}


/**
 * function to select the image and display its enlarged format
 */

document.querySelectorAll('.images-container img').forEach(item => {
   item.onclick = () => {
      document.querySelector('.enlarged-image').style.display = 'block';
      document.querySelector('.enlarged-image img').src = item.getAttribute('src');
   }
});

/**
 * function to stop displaying the enlarged image
 */
document.querySelector('.enlarged-image span').onclick = () => {
   document.querySelector('.enlarged-image').style.display = 'none';
}

