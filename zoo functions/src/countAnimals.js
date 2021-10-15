const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const allAnimals = species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
    return allAnimals;
  }
  if (animal.sex) {
    const animalWithGender = species
      .reduce((acc, { name, residents }) => ((name === animal.specie) ? residents : acc), [])
      .filter((test) => test.sex === animal.sex).length;
    return animalWithGender;
  }

  const animals = species
    .filter(({name:animalN}) => animalN
      .includes(animal.specie))
    .reduce((acc, {residents}) => acc = residents.length, 0);
  return animals;
}

/* a condicional de mostrar todos os animas e nomes, foi feita baseada no modo como o arthur BMessias fez https://github.com/tryber/sd-015-b-project-zoo-functions/pull/20/commits/5f0a5e5e82590cfa82963864a52ba7228bf1b421 */

console.log(countAnimals());
module.exports = countAnimals;
