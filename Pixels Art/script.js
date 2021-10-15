const dadDivBody = document.querySelector('body');
dadDivBody.classList = 'body';

/* numero 1 */
function title(params) {
  const divTitle = document.createElement('div');
  const dadDivTitle = document.querySelector('body');
  dadDivTitle.appendChild(divTitle);
  const creatH1 = document.createElement('h1');
  divTitle.appendChild(creatH1);
  const h1Title = document.querySelector('h1');
  h1Title.id = 'title';
  h1Title.innerHTML = params;
}

title('Paleta de Cores');
/* numero 2 */
function creatPaletColorsDiv(params) {
  const divPaletColors = document.createElement('div');
  divPaletColors.id = 'color-palette';
  dadDivBody.appendChild(divPaletColors);
  for (let index = 0; index <= params; index += 1) {
    const dadDivColors = document.querySelector('#color-palette');
    const divColors = document.createElement('div');
    divColors.classList.add('color');
    dadDivColors.appendChild(divColors);
  }
}
creatPaletColorsDiv(3);
/* dividir em duas funçoes depois */
/* exercicio 12 */
function divBackGroundColor() {
  /*  peguei a referencia do codigo de cores aleatorias nesse video https://youtu.be/9nt9HRdPSpo */
  const catchDivColor = document.querySelectorAll('.color');
  for (let index = 1; index < catchDivColor.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    catchDivColor[index].style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}
divBackGroundColor();

/* ajuda do luiz W para criar uma section e colocar o pixelSquare dentro DelayNode, resolvendo o problema de criação de do requesito 11 */
const creatSection = document.createElement('section');
dadDivBody.appendChild(creatSection);

/* numero 4 */
function pixelSquare(pixels) {
  const divSquare = document.createElement('div');
  creatSection.id = 'pixel-board';
  creatSection.appendChild(divSquare);
  let divColuns;
  for (let index = 0; index < pixels; index += 1) {
    const divPixel = document.createElement('div');
    /* divPixel.classList = 'pixel' */
    divSquare.appendChild(divPixel);

    for (let indexColun = 0; indexColun < pixels; indexColun += 1) {
      divColuns = document.createElement('div');
      divColuns.classList = 'pixel';
      divPixel.appendChild(divColuns);
    }
  }
}
pixelSquare(5);

/* remover a classe dos pais  */

/* exercicio 6 */
function blackColor(params) {
  const classCollorBlack = document.querySelectorAll('.color')[params];
  classCollorBlack.classList.add('selected');
  classCollorBlack.style.backgroundColor = 'rgb(0,0,0)';
}
blackColor(0);

function selectColorOfPalet() {
  const catchPaletColors = document.querySelector('#color-palette');
  catchPaletColors.addEventListener('click', (event) => {
    /* dica do luiz wanderson para criar uma função para remover a classe selected */
    removeSelect();
    event.target.classList.add('selected');
  });
}

selectColorOfPalet();
/* por enquanto não esta descelecionando as demais
*/
function removeSelect() {
  const catchSelect = document.querySelectorAll('.selected');
  for (let index = 0; index < catchSelect.length; index += 1) {
    catchSelect[index].classList.remove('selected');
  }
}

/* exercicio 8  */
function paintThePixels() {
  const selectedColor = document.getElementsByClassName('color selected');
  const colorDiv = document.querySelector('.color');
  const pallete = document.querySelector('#pixel-board');
  const backGColor = colorDiv.style.backgroundColor;
  pallete.addEventListener('click', (event) => {
    const eventTargetBackGColor = event.target.backgroundColor;
    if (selectedColor.length > 0 && eventTargetBackGColor !== backGColor) {
      const elementBackGColor = selectedColor[0].style.backgroundColor;
      event.target.style.backgroundColor = elementBackGColor;
    }
  });
}
paintThePixels();
/* exercicio 9  */
function creatButton(params) {
  const creatButton = document.createElement('button');
  creatButton.id = 'clear-board';
  creatButton.classList.add('buttons');
  creatButton.innerHTML = params;
  dadDivBody.appendChild(creatButton);
  creatButton.addEventListener('click', () => {
    const pallete = document.querySelectorAll('.pixel');
    for (let index = 0; index < pallete.length; index += 1) {
      pallete[index].style.backgroundColor = 'white';
    }
  });
}
creatButton('Limpar');

function creatImput() {
  const creatImput = document.createElement('input');
  const creatDivImput = document.createElement('div');
  const creatButton = document.createElement('button');
  creatDivImput.className = 'input';
  creatImput.id = 'board-size';
  creatButton.id = 'generate-board';
  creatButton.classList.add('buttons');
  creatButton.innerHTML = 'VQV';
  dadDivBody.appendChild(creatDivImput);
  creatDivImput.appendChild(creatImput);
  creatDivImput.appendChild(creatButton);

}
creatImput();
/* exercio 10 e 11 */
function alteredPixelSquared() {
  const catchButton = document.querySelector('#generate-board');
  catchButton.addEventListener('click', () => {
    let catchImput = document.querySelector('#board-size').value;

    if (catchImput === '') {
      window.alert('Board inválido!');
    }
    else if (catchImput < 5) {
      catchImput = 5;
    }
    else if (catchImput > 50) {
      catchImput = 50;
    }
    creatSection.innerHTML = '';
    pixelSquare(catchImput);
  });
}
alteredPixelSquared();

function theGodfather() {
  const divGoFather = document.createElement('div');
  divGoFather.className = 'theGodFather';
  dadDivBody.appendChild(divGoFather);
  const catchPallet = document.querySelector('#color-palette');
  const catchButton = document.querySelector('#clear-board');
  const catchImput = document.querySelector('.input');
  const catchSection = document.querySelector('#pixel-board');
  divGoFather.appendChild(catchPallet);
  divGoFather.appendChild(catchButton);
  divGoFather.appendChild(catchImput);
  divGoFather.appendChild(catchSection);
}
theGodfather();

function creatButtonAddColor() {
  const creatButton = document.createElement('button');
  const catchDivButtonAddColor = document.querySelector('.input');
  creatButton.id = 'generate-color';
  creatButton.classList.add('buttons');
  creatButton.innerHTML = '+ cores';
  catchDivButtonAddColor.appendChild(creatButton);
}
creatButtonAddColor();

function addColors() {
  const catchButton = document.querySelector('#generate-color');
  catchButton.addEventListener('click', () => {
    const dadDivColors = document.querySelector('#color-palette');
    const creatNewcolor = document.createElement('div');
    creatNewcolor.className = 'color';
    dadDivColors.appendChild(creatNewcolor);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    creatNewcolor.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
}
addColors()