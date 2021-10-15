const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalValidateMinAge = species
    .find((specie) => specie.name === animal);
  return animalValidateMinAge.residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
