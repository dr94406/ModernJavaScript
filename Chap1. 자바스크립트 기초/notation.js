const car = {
    wheels: 4,
    color: "red",
};

console.log(car.wheels); // 점표기법
console.log([car['color']]); // 대괄호 표기법

// 점표기법은 여러 단어로 이뤄진 속성을 호출할 수는 없다.

//Ex) 
const car2 = {
    wheels: 4,
    color: "red",
    "goes fast" : true
};


// console.log(car2.gose fast); // syntax error
console.log(car2['goes fast']);
