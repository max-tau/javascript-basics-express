const createPerson = (name, age) => {
  const person = {
    name,
    age,
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(personAge => {
    return personAge.age;
  });
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people
    .map(personAge => personAge.age)
    .reduce((acc, val) => {
      return acc + val;
    });
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name,
    age,
    introduce(name2) {
      return `Hi ${name2}, my name is ${this.name} and I am ${this.age}!`;
    },
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
