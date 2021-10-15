const data = require('../data/zoo_data');

const { species, employees } = data;

function catchAllEmployees() {
  const allEmployeesObject = employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: species
      .filter(({ id: ids }) => responsibleFor.includes(ids)).map(({ name }) => name),
    locations: species
      .filter(({ id: ids }) => responsibleFor.includes(ids)).map(({ location }) => location),
  }));
  return allEmployeesObject;
}
function catchEmployees(param) {
  const employee = catchAllEmployees()
    .find(({ fullName, id }) => fullName.includes(param.name) || id.includes(param.id));
  if (employee !== undefined) {
    return employee;
  }
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage(param) {
  // seu código aqui
  // if (param == catchAllEmployees(param)){throw new Error('Informações inválidas')}
  if (param === undefined) { return catchAllEmployees(); }
  return catchEmployees(param);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
