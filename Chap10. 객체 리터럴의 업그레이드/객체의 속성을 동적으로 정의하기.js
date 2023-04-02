// ES5

var name ="myname";
var person = {};
// 객체 업데이트
person[name] = "Alberto";
console.log(person.myname);
// Alberto



// ES6

const name = "myname";
const person = {
    [name]: "Alberto",
};
console.log(person.myname);
//Alberto