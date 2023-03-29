// 배열을 디스트럭처링할 때는 객체의 디스트럭처링과는 달리 {}가 아닌 []를 사용한다.

const person = ["Alberto", "Montalesi", 25];
const [name, surname, age] = person;

// 생성하려는 변수의 수가 배열의 원소보다 적다면 어떻게 할까?

const person2 = ["Alberto", "Montalesi", 25];
// age(25)는 필요하지 않으므로 뺸다.
const [name2, surname2] = person2;
// 25는 어떤 변수에도 할당되지 않는다.
console.log(name,surname);
// Alberto Montalesi

// 나머지 값을 얻고 싶다면 레스트 연산자를 사용하면 된다.
const person3 =["Alberto", "Montalesi", "pizza", "ice cream", "cheesecake"];

// 레스트 연산자를 사용하여 나머지 값 전체를 얻는다.
const [name3, surname3, ...food] = person;

console.log(pood);
// ["pizza", "ice cream", "cheese cake"]

// 이 예시에서 배열의 처음 두 값은 name과 surname에 할당되고 나머지는 food 배열에 할당된다. (...가 레스트 연산자를 의미함.)