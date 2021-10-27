const saveCartItems = (callback) => {
  // seu código aqui
  localStorage.setItem('cartItems', callback);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
