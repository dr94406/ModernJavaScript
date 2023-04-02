/*
이 기능은 ES6의 일부는 아니지만, 스프레드를 다루는 김에 ES2018에서 도입된 객체에 대한 스프레드 연산자의 예시도 같이 살펴보도록 하자.
*/

let person = {
    name :"Alberto",
    surname: "Montalesi",
    age: 25,
};

let clone = {...person};
console.log(clone);
// {name: "Alberto", surname: "Montalesi", age: 25}