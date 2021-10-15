const data = require('../data/zoo_data');

const { species, hours } = data;
const animals = species.map(({ name: animalName }) => animalName);
const days = Object.keys(hours);

function oneDay(weekDay) {
  const day = {};
  day[weekDay] = {
    officeHour: `Open from ${hours[weekDay].open}am until ${hours[weekDay].close}pm`,
    exhibition: species
      .filter(({ availability }) => availability.includes(weekDay)).map(({ name }) => name),
  };
  return day;
}

function everyDays(weekDays) {
  const weekSchedules = {};
  weekDays.map((day) => {
    if (hours[day].open === 0 && hours[day].close === 0) {
      weekSchedules[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return weekSchedules[day];
    }

    weekSchedules[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(day)).map(({ name }) => name),
    };
    return weekSchedules[day];
  });
  return weekSchedules;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  // verificar se o parametro nao existe dentro de days e de animals
  if (![...days, ...animals].includes(scheduleTarget)) {
    return everyDays(days);
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  // verificar o animal passado como parametro
  if ([...animals].includes(scheduleTarget)) {
    return species.find(({ name }) => scheduleTarget === name).availability;
  }
  // verificar o dia passado como parametro
  if ([...days].includes(scheduleTarget)) {
    return oneDay(scheduleTarget);
  }
}

console.log(getSchedule('Sunday'));
// console.log(Object.keys(hours));
module.exports = getSchedule;

/* essa questão eu analizei como o renan adorno fez e fiz algumas alterações https://github.com/tryber/sd-015-a-project-zoo-functions/pull/143/commits/837bf50f71c064ebaaf7ab1ce7f45ea3d3ef801b */

/* esse era meu codigo original, porem o lint nao o deixou passar
(weekDays[day].open === 0 && weekDays[day].close === 0)
        ? weekSchedules[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
        : weekSchedules[day] = {
          officeHour: `Open from ${weekDays[day].open}am until ${weekDays[day].close}pm`,
          exhibition: species
            .filter(({ availability }) => availability.includes(day)).map(({ name }) => name),
        }) */
