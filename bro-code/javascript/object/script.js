const person = {
  firstname: "Ahmet",
  lastname: "Yavuz",
  age: 30,
  isEmployed: true,
  sayHello: () => {
    console.log(`Hi! my name is Ahmet.`);
  },
};

console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);

const person2 = {
  firstname: "Mehmet",
  lastname: "Canak",
  age: 35,
  isEmployed: false,
};

const persons = [person, person2];

console.log(persons);
