// global variables

const catchItens = document.querySelector('.items');
const catchCardsButton = document.querySelector('.empty-cart');
const input = document.querySelector('input');
const button = document.querySelector('button');

// functions project
const fetchHero = (argu) => {
  
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  if (argu !== undefined) {
    const response =
      fetch(`https://www.superheroapi.com/api.php/4520919148002635/search/${argu}`, options)
        .then((respon) => respon.json())
        .then((data) => data.results)

    return response;
  }
  return new Error('You must provide an url');
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'hero-image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ name, image, powerstats }) {
  const section = document.createElement('section');
  section.className = 'item';
  const stats = Object.entries(powerstats)
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'title-card', name));
  stats
    .forEach((i) => {
      (i[1] !== null) ? section
        .appendChild(createCustomElement('span', 'hero-stats', `${i[0]}: ${i[1].replace(null, 'deconhecido')}`)) : "";

    })
  return section;
}


// my functions


// cria itens na pagina
const creatWithArrayHeroes = async () => {

  catchItens.innerHTML = '';
  const itensList = await fetchHero(input.value)
if (itensList !== undefined) {
  const itensListFiltred = Array(itensList)[0]
    .map(({ name, image, powerstats }) =>
      ({ name: name, image: image.url, powerstats: powerstats }));
  itensListFiltred.forEach((element) =>
    catchItens.appendChild(createProductItemElement(element)));
    }
    else{
      alert('insira um heroi valido')
    }



};


button.addEventListener('click', creatWithArrayHeroes);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    creatWithArrayHeroes(input.value)
  }
});
