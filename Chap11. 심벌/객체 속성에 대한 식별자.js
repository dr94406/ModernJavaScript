const office = {
    "Tom": "CEO",
    "Mark": "CTO",
    "Mark": "CIO",
};

for (person in office) {
    console.log(person);
}

// Tom
// Mark

// 사무실 객체가 있고, 그 사무실에는 3명이 있다. 그중 2명은 이름이 같다. 이럴때 속성 이름이 겹치는 것을 피하기 위해 심벌 사용가능.

const office2 = {
    [Symbol ("Tom")]: "CEO",
    [Symbol ("Mark")]: "CTO",
    [Symbol ("Mark")]: "CIO",
};

for(person2 in office2) {
    console.log(person2);
}
// undefined, 심벌은 열거 가능하지 않다. 객체 속성의 배열을 얻기위해서는 Object.getOwnPropertySymbols()를 사용한다.


const office3  = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",
};

const symbols = Object.getOwnPropertySymbols(office3);
console.log(symbols);


/* 0: Symbol(Tom)
   1: Symbol(Mark)
   2: Symbol(Mark)
   length: 3*/

   // 배열을 얻은 후 속성에 접근하려면 map을 사용하면 된다.

   const symbols2 = Object.getOwnPropertySymbols(office3);
   const value = symbols.map(symbol => office3[symbol]);
   console.log(value);
   // 0: "CEO"
   // 1: "CTO"
   // 2: "CIO"
   // length: 3

