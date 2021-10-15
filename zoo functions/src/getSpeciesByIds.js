const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesFiltred = ids.map((id) => species.find((specie) => (specie.id.includes(id))))
  return speciesFiltred;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
