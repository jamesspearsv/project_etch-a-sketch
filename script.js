//Loads canvas grid on page load
const canvas = document.querySelector('.canvas');
window.onload = () => {
    var i;
    for (i=0; i < 256; i++) {
      const div = document.createElement('div');
      div.classList.add('square');
      canvas.appendChild(div);
    };
};
