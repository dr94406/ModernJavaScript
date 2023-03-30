// 배열의 결합

const veggie = ["tomato", "cucumber", "beans"];
const meat = ["pork", "beef", "chicken"];

const menu = [...veggie, "pasta", ...meat];
console.log(menu);
// ["tomato", "cucumber", "beans", "pork", "beef", "chicken"];


// 배열의 복사

const veggie2 = ["tomato", "cucumber", "beans"];
const newVeggie = veggie2;

veggie2.push("peas");

console.log(veggie2);
// ["tomato", "cucumber", "beans", "peas"]

console.log(newVeggie);
//["tomato", "cucumber", "beans", peas]