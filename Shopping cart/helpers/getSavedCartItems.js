const getSavedCartItems = () => 
  // seu código aqui
    localStorage.getItem('cartItems');
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
