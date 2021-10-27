const fetchItem = async (id) => {
  if (id) {
    const response = await
    fetch(`https://api.mercadolibre.com/items/${id}`);
    return response.json();
  }
  return new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
