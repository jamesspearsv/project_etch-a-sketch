const grid = document.querySelector('.grid');

//Loads grid on page load
function createGrid () {
  var i;
  for (i=0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('gridItem');
  grid.appendChild(div);
  };
};
createGrid();

//Hover effect to change background color
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'black';
  });
});
