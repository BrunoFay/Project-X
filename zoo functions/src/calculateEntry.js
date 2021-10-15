const data = require('../data/zoo_data');

const { prices } = data;
const { adult: adultPrice, child: childPrice, senior: seniorPrice } = prices;

function countEntrants(entrants) {
  // seu código aqui
  const childNum = entrants.filter(({ age }) => age < 18).length;
  const adultNum = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniorNum = entrants.filter(({ age }) => age >= 50).length;

  return { child: childNum, adult: adultNum, senior: seniorNum };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) { return 0; }
  const entryTotalValue = [countEntrants(entrants)];
  return entryTotalValue
    .reduce((acc, { adult, child, senior }) => acc = (adult * adultPrice)
     + (child * childPrice)
      + (senior * seniorPrice), 0);
}

module.exports = { calculateEntry, countEntrants };
/* a verificação atravez do Object.entries venho inspirada em como o david souza usou na questão para verificar se avia algum elemento dentro do objeto https://github.com/tryber/sd-015-b-project-zoo-functions/pull/5/commits/9a1b145724ba6c194d8e1b5882410c84e6d90481 */
