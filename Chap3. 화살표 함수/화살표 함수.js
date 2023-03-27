// ES5

const greeting = function(name){
    return "hello " + name;
};

// ES6
var greeting2 = (name) => {
    return `hello ${name}`;
};

// 매개변수가 하나만 있으면 괄호 생략가능.

var greeting2 = name => {
    return `hello${name}`;
};

// 매개변수가 없으면 빈 괄호 사용

var greeting2 = () => {
    return "hello";
};

// 화살표 함수는 익명 함수

const greeting3 = name => `hello ${name}`;

greeting("Tom");

