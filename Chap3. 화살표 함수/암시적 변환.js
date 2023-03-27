const greeting = name => `hello ${name}`;

const oldFunction = function(name){
    return "hello " + name;
};

// ES 6
const arrowFunction = name => `hello ${name}`;

const arrowFunction2 = (name) => {
    return `hello ${name}`;
};

// 객체 리터럴을 암시적으로 변환

const race = "100m dash";
const runners = ["Usain Bolt", "Justin Gatlin", "Asafa powell"];

const results = 
 runners.map((runner, i) => ({name: runner, race, place: i + 1}));

 console.log(results);


 

