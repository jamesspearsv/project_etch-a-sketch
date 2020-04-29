//-----Global Variables-----//
const grid = document.querySelector('.grid');
const btns = document.querySelectorAll('.resetButton');
let divCount = 16; //Deault number of squares per side of grid.
let buttonValue = 'black'; //Default color setting
let startBackGround;




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
        div.style.cssText = 'height: auto;width: auto; background-color: rgb(255,255,255)';
      grid.style.cssText = `grid-template-columns: repeat(${divCount}, auto)`
      grid.appendChild(div);
    };
};


//Adds hover event listener to gridItems.
//Changes background from white to black
function hover() {
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {

    e.target.style.cssText = 'background-color: rgb(0,0,0);';

    });
  });
};

//Adds hover event listener to gridItems.
//Changes background from white to random RGB color.
function rgbHover() {
const gridItem = document.querySelectorAll ('.gridItem');
gridItem.forEach((gridItem) => {
  gridItem.addEventListener('mouseenter', (e) => {

    let red = Math.floor ((Math.random() * 255) + 1);
    let blue = Math.floor ((Math.random() * 255) + 1);
    let green = Math.floor ((Math.random() * 255) + 1);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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

function blackLevelHover () {
  const gridItem = document.querySelectorAll ('.gridItem');
  gridItem.forEach((gridItem) => {
    gridItem.addEventListener('mouseenter', (e) => {

      e.target.style.backgroundColor = `rgb(${rgbNum}, ${rgbNum}, ${rgbNum})`;
      });
    });
};

    function increaseBlackLevel () {
      const testText = document.querySelector('h1');
        testText.style.color = 'rgb(255,255,255)';
        let rgbNum =255;

      testText.addEventListener('mouseenter', (e) => {
        rgbNum = rgbNum - (255 * 0.1);
          console.log(rgbNum);

        e.target.style.color = `rgb(${rgbNum}, ${rgbNum}, ${rgbNum})`;
      });
    };

    function getRGBValue () {
    const gridItem = document.querySelectorAll ('.gridItem');

      gridItem.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', (e) => {
          var colorSTR = e.target.style.backgroundColor;
          let rgbNumStart = colorSTR.slice(13, -1) *1;

            let rgbNum = rgbNumStart;
             rgbNum = (rgbNumStart - 26);
              console.log('rgbNum: ' + rgbNum);
              console.log('rgbNumStart: ' + rgbNumStart);
              console.log('colorSTR: ' + colorSTR);

       });
     });
   };

   function blHover () {
     const gridItem = document.querySelectorAll ('.gridItem');

     let rgbNum;

       gridItem.forEach((gridItem) => {
         gridItem.addEventListener('mouseenter', (e) => {
           var colorSTR = e.target.style.backgroundColor;
           let rgbNumStart = colorSTR.slice(13, -1);
            rgbNum = +rgbNumStart;
             console.log('rgbNum: ' + rgbNumStart);
             console.log('colorSTR: ' + colorSTR);

        rgbNum = rgbNum - (rgbNumStart * 0.1);
          console.log(rgbNum);

        //e.target.style.color = `rgb(${rgbNum}, ${rgbNum}, ${rgbNum})`;
        });
      });
   };

function setTheme(buttonValue) {
  const gridItem = document.querySelectorAll ('.gridItem');
  gridItem.forEach((gridItem) => {

    if (buttonValue === 'moasic') {
      let red = Math.floor ((Math.random() * 255) + 1);
      let blue = Math.floor ((Math.random() * 255) + 1);
      let green = Math.floor ((Math.random() * 255) + 1);

      gridItem.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`;
    } else {
        gridItem.style.backgroundColor = 'rgb(255,255,255)'
    };

    //Sets chosen user color settings
    if (buttonValue === 'black') {
      hover();
    } else if (buttonValue === 'RGB') {
      rgbHover();
    } else {
     increaseBlackLevel2();
    };
  });
};

function setGridSize () {
  divCount = prompt('How many squares wide should the grid be? 1-64');

  divCount = +divCount; //Converts string to number

}


//-----Script-----//
//Creates grid on page load
createGrid(divCount, buttonValue);
setTheme(buttonValue);
//getRGBValue();

//Reset buttons script
btns.forEach((button) =>{
  button.addEventListener('click', () => {
    buttonValue = button.value;

    setGridSize();
    createGrid(divCount, buttonValue);
    setTheme(buttonValue);
    });
});
