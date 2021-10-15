const data = require('../data/zoo_data');

const { species } = data

function animalsRegions(loc) {
  
 return species.filter(({location})=>location === loc).map(({ name }) => name);
 //.map(({name,location})=> ({[location]:[name]}))
}

function animalsNames() {
  const animalNames = animalsRegions()
  return animalNames.map(({ name, residents }) => ({ [name]: residents
    .map((resident) => resident.name) }));
}
function sortedNames(params) {
  return
}
const allAnimalsRegions = {NE:animalsRegions('NE'),
NW:animalsRegions('NW'),
SE:animalsRegions('SE'),
SW:animalsRegions('SW')}

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return allAnimalsRegions
  }
  
}
console.log(getAnimalMap());
//console.log(getAnimalMap());
module.exports = getAnimalMap;
