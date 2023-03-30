
// 기존 방식

function doStuff(x,y,z) {
    console.log(x + y + z);
}
var args = [0, 1, 2];

// 함수 호출, 인수 전달
doStuff.apply(null,args);

// 스프레드 문법 사용

doStuff(...args);
// 3 (0 + 1 + 2)
console.log(args);
// [0, 1, 2]


const name =["Alberto", "Montalesi"];

function greet(first, last) {
    console.log(`Hello ${frist} ${last}`);
}

greet(...name);
// Hello Alberto Montalesi


const name2 = ["Jon", "Paul", "Jones"];

function greet2(frist, last) {
    console.log(`Hello ${first} ${last}`);
}
greet(...name2);
// Hello Jon Paul