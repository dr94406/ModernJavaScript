const name ="Albetro";
const surname ="Montalesi";
const age = 25;
const nationality = "Italian";

// 이 코드를 이용하여 객체 리터럴을 만들고 싶다면 다음과 같이 한다.

const person = {
    name: name,
    surname: surname,
    age: age,
    nationality: nationality,
};

console.log(person);

// ES6에서는 다음과 같이 단순화

const person2 ={
    name,
    surname,
    age,
    nationality,
};

console.log(person2);