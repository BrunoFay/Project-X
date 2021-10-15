const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || {};
/*  .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName || {}); esse era o codigo original mas tive q adptar para o de cima, pois nao estava passando no test */
}
module.exports = getEmployeeByName;
console.log(getEmployeeByName());
