//-----Global Variables-----//
const grid = document.querySelector('.grid');
const btns = document.querySelectorAll('.resetButton');
let divCount = 16; //Initial number of squares per side of grid.
let buttonValue = 'black'; //Initnal color setting

//-----Function Defs-----//
//Creates new grid and resets current grid
function createGrid(divCount, buttonValue) {
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
        //div.style.cssText = `height: 500/${divCount}px;width: 500///${divCount}px;`
        div.style.cssText = 'height: auto;width: auto';
      grid.style.cssText = `grid-template-columns: repeat(${divCount}, auto)`
      grid.appendChild(div);
    };

    if (buttonValue === 'black') {
      hover();
    } else {
      rgbHover();
    }
};


//Adds hover event listener to gridItems.
//Changes background from white to black
function hover() {
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'black';
    });
  });
};

//Adds hover event listener to gridItems.
//Changes background from white to random RGB color.
function rgbHover() {
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = `${randRGB()}`;
    });
  });
};

//Generates random RGB values
function randRGB () {
  let red = Math.floor ((Math.random() * 255) + 1);
  let blue = Math.floor ((Math.random() * 255) + 1);
  let green = Math.floor ((Math.random() * 255) + 1);
    //Returns string with style to be applied
    return `rgb(${red}, ${green}, ${blue})`;
};

//-----Script-----//
//Creates grid on page load
createGrid(divCount, buttonValue);

//Reset buttons script
btns.forEach((button) =>{
  button.addEventListener('click', () => {
    divCount = prompt('How many squares wide should the grid be? 1-64');
        divCount = +divCount; //Converts string to number
    buttonValue = button.value;

    createGrid(divCount, buttonValue);
    });
});
