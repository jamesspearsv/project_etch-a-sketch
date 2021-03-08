//Comment
//-----Global Variables-----//
const grid = document.querySelector(".grid");
const btns = document.querySelectorAll(".resetButton");
let divCount = 16; //Deault number of squares per side of grid.
let buttonValue = "black"; //Default color setting

//-----Function Definitions-----//
//Creates new grid and resets current grid
function createGrid(divCount) {
  let newGridSize = divCount * divCount;
  //Limits user input
  if (divCount < 1 || divCount > 64) {
    return;
  }

  //Removes previous grid
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  //Draws new grid
  var i;
  for (i = 0; i < newGridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("gridItem");
    div.style.cssText =
      "height: auto;width: auto; background-color: rgb(255,255,255)";
    grid.style.cssText = `grid-template-columns: repeat(${divCount}, auto)`;
    grid.appendChild(div);
  }
}

//Sets initial grid background.
function setTheme(buttonValue) {
  const gridItem = document.querySelectorAll(".gridItem");
  let rgbValue = randRGB();
  gridItem.forEach((gridItem) => {
    if (buttonValue === "shades") {
      gridItem.style.backgroundColor = rgbValue;
    } else {
      gridItem.style.backgroundColor = "rgb(255,255,255)";
    }
  });
}
//Sets the user drawing mode. Black, RGB, or Grayscale
function setDrawMode(buttonValue) {
  if (buttonValue == "black") {
    hover();
  } else if (buttonValue == "RGB") {
    rgbHover();
  } else if (buttonValue == "grayScale" || buttonValue == "shades") {
    grayScaleHover();
  }
}

//Adds black to white hover event listener to gridItems.
function hover() {
  const gridItem = document.querySelectorAll(".gridItem");
  gridItem.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => {
      e.target.style.cssText = "background-color: rgb(0, 0, 0);";
    });
  });
}

//Adds random RGB hover event listener to gridItems.
function rgbHover() {
  const gridItem = document.querySelectorAll(".gridItem");
  gridItem.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => {
      let red = Math.floor(Math.random() * 255 + 1);
      let blue = Math.floor(Math.random() * 255 + 1);
      let green = Math.floor(Math.random() * 255 + 1);

      e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

//Adds grayscale hover event listener to gridItems.
function grayScaleHover() {
  const gridItem = document.querySelectorAll(".gridItem");
  gridItem.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => {
      let colorValues = e.target.style.backgroundColor;
      let rgbString = colorValues.slice(4, -1);
      let rgbArray = rgbString.split(", ");

      let rInt = rgbArray[0];
      let gInt = rgbArray[1];
      let bInt = rgbArray[2];

      rInt -= 26;
      gInt -= 26;
      bInt -= 26;

      e.target.style.backgroundColor = `rgb(${rInt}, ${gInt}, ${bInt})`;
    });
  });
}

//Generates random RGB values
function randRGB() {
  let red = Math.floor(Math.random() * 255 + 1);
  let blue = Math.floor(Math.random() * 255 + 1);
  let green = Math.floor(Math.random() * 255 + 1);
  //Returns string with style to be applied
  return `rgb(${red}, ${green}, ${blue})`;
}

//-----Script-----//
//Creates grid on page load
createGrid(divCount);
setTheme(buttonValue);
setDrawMode(buttonValue);

//Reset buttons script
btns.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.value;
    divCount = prompt("How many squares wide should the grid be? 1-64");
    createGrid(divCount);
    setTheme(buttonValue);
    setDrawMode(buttonValue);
  });
});
