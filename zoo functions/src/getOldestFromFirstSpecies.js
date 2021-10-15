const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeFiltred = employees
    .filter((employee) => employee.id === id)
    .reduce((acc, {responsibleFor}) => responsibleFor[0], []);

  const animalAgeFiltred = species
    .find(({id:animalId}) => (animalId === employeFiltred))
    .residents.sort((a, b) => b.age - a.age)
    .map(({ name, sex, age }) => [name, sex, age])[0];

  /*  usei a parte de .find inspirado no projeto do lucas gabriel https://github.com/tryber/sd-014-b-project-zoo-functions/pull/138/commits/a44c9da68548c570b803b307dc971bc19e93549a */
  return animalAgeFiltred;
}

module.exports = getOldestFromFirstSpecies;

/*  const animalAgeFiltred = species
.find((animal) => (animal.id === employeFiltred))
.residents.sort((a, b) => b.age - a.age); ALTERNATIVE */
