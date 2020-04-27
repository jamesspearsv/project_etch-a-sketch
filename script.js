//-----Global Variables-----//
const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.resetButton');
let divCount = 16; //Initial number of squares per side of grid.

//-----Function Defs-----//
//Resets grid on page and creates new grid
function createGrid() {
    let newGridSize = (divCount * divCount);
    //Limits user input
    if (divCount < 1 || divCount > 64) {
      return;
    };
    //Removes previous grid
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
      };
    //Draws new grid
    var i;
    for (i=0; i < newGridSize; i++) {
      const div = document.createElement('div');
        div.classList.add('gridItem');
        div.style.cssText = `height: 500/${divCount}px;width: 500/${divCount}px;`
      grid.style.cssText = `grid-template-columns: repeat(${divCount}, auto)`
      grid.appendChild(div);
    };
    hover();
};


//Adds hover event listener to gridItems
function hover() {
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'black';
    });
  });
};

//-----Script-----//
createGrid(divCount);

resetButton.addEventListener('click', () => {
  divCount = prompt('How many squares wide should the grid be? 1-64');
      divCount = +divCount; //Converts string to number
  createGrid(divCount);
});
