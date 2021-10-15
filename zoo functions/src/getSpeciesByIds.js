const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesFiltred = ids.map((id) => species.find((specie) => specie.id === id));
  return speciesFiltred;
}
module.exports = getSpeciesByIds;
