const constant = "I am a constant";
constant = "I can 't be ressigned";

// Uncaught TypeError: Assignment to constant variable

// const in Array ? 

const person ={
    name: 'Alberto',
    age: 25,
};

person.age = 26;
console.log(person.age);
// 26

const person = {
    name: 'Alberto',
    age: 25,
};

person.age = 26;

console.log(person.age);
// 26

Object.freeze(person);

person.age = 30;

console.log(person.age);

//26