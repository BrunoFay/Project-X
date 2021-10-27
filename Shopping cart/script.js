// global variables
const catchCart = document.querySelector('.cart__items');
const catchItens = document.querySelector('.items');
const catchCartButton = document.querySelector('.empty-cart');
const creatElement = document.createElement('p');
creatElement.classList.add('total-price');
document.querySelector('#preco').appendChild(creatElement);
const input = document.querySelector('input');
const button = document.querySelector('button'); 

// functions project

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image, itemPrice }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'price', `${itemPrice} R$`));
  section.appendChild(createCustomElement('button', 'item__add', 'comprar'));

  return section;
}

// remove o numero, o R$ e o elemento inteiro
function cartItemClickListener(event) {
  const element = event.target;
 const numero = element.innerText.replace('R$', '');
  
 if (element.classList.contains('tPrice')) {
    counter(numero, '');
 return element.parentNode.parentNode.removeChild(element.parentNode);
}
  saveCartItems(catchCart.innerHTML);
}

function createCartItemElement({ title: name, price: salePrice, thumbnail: imag }) {
  const li = document.createElement('li');
  const image = document.createElement('img');
  const span = document.createElement('span');
  li.className = 'cart__item';
  span.classList.add('tPrice');
  image.classList.add('item__image');
  image.src = imag;
  li.innerText = name;
  span.innerText = `${salePrice} R$`;
  li.appendChild(image);
  li.appendChild(span);
  li.addEventListener('click', cartItemClickListener);
  counter(salePrice, '+');

  return li;
}
// my functions
// contador total dos preços
const counter = (price, sum) => {
  // credits :luiz wanderson e a turma da sala 5
  if (sum === '+') {
    creatElement.innerText = parseFloat(Number(creatElement.innerText) + Number(price)).toFixed(2);
  } else {
    creatElement.innerText = parseFloat(Number(creatElement.innerText) - Number(price)).toFixed(2);
  }
  
  /* codigo original porem nao é viavel.Ao remover o item do carinho, esse valor nao é removido do array
  prices.push(test);
  const totalPrice = prices.reduce((acc, price) => {
    const total = acc + price;
    return total; 
  });
  creatElement.innerHTML = totalPrice; */
};
// cria e remove loading
const creatLoadingFeat = async () => {
  const span = document.createElement('span');
  span.classList.add('loading');
  span.innerHTML = 'loading...';
  catchCart.appendChild(span);
};
const removeLoadingFeat = async () => {
  const catchLoading = document.querySelector('.loading');
  return catchLoading.remove();
};
// cria itens na pagina
const creatWithArrayItens = async () => {
  creatLoadingFeat();
  catchItens.innerHTML = '';
  const itensList = await fetchProducts(input.value);
  removeLoadingFeat();
  const itensListFiltred = itensList.results.map(({ id, title, thumbnail, price }) =>
    ({ sku: id, name: title, image: thumbnail, itemPrice: price }));
  itensListFiltred.forEach((element) =>
    catchItens.appendChild(createProductItemElement(element)));
};
// cria os itens no carrinho
const creatItensOnShoppingCart = async (id) => {
  creatLoadingFeat();
  const item = await fetchItem(id);
  removeLoadingFeat();
  catchCart.appendChild(createCartItemElement(item));
  saveCartItems(catchCart.innerHTML);
};
// codigo para escrever o nome dos itens no carrinho
const getIdItem = (item) => item.target.parentNode.firstChild.innerHTML;
const addItemOnShopCart = () =>
  /* usei o codigo a baixo do para fazer dinamicamente a inclusão de itens https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript 
  e tive a ajuda na mentoria */
  document.addEventListener('click', (item) => {
    if (item.target && item.target.classList.contains('item__add')) {
      creatItensOnShoppingCart(getIdItem(item));
    }
    // esse codigo é para poder excluir os itens depois q a pagina recarregou
    if (item.target && item.target.classList.contains('cart__item')) {
      cartItemClickListener(item);
    }
  });
const removeAllItens = () => catchCartButton.addEventListener('click', () => {
  catchCart.innerHTML = '';
  creatElement.innerHTML = 0;
});
function loadItemsInCart() {
  const iHTMLcartI = getSavedCartItems();
  catchCart.innerHTML = iHTMLcartI;
}

button.addEventListener('click', creatWithArrayItens);
document.addEventListener('keydown', (event)=>(event.key === 'Enter')? creatWithArrayItens(input.value):'');
window.onload = () => {
  loadItemsInCart();
  addItemOnShopCart();
  removeAllItens();
};
