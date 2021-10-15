const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  /*   usei a ideia do includes baseada no questão da aline siqueira https://github.com/tryber/sd-015-b-project-zoo-functions/pull/145/commits/cfd4325560abffbb1026352cd4510953abdb1b87 */
  const employeeFiltred = employees.some((employee) => employee.managers.includes(id));

  return employeeFiltred;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const managerNames = employees
      .filter(({managers}) => managers
        .some((managerCheck) => managerId === managerCheck))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

    return managerNames;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

/*
  .filter((employee) => employee.id === id)
  primeira combinação feita, fui atras de outros meios por achar que o reduce estava errado
  .reduce((acc, manager) => manager.managers, [])
  .some((managerCheck) => managerCheck === true); */
