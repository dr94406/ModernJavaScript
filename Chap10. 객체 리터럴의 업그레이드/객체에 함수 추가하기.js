// ES5

const person = {
    name: "Albetro",
    greet: function(){
        console.log("Hello");
    },
};

person.greet();


// ES6

const person2 = {
    name: "Alberto",
    greet() {
        console.log("Hello");
    },
};

person2.greet();  // Function 키워드 생략가능.

// 다음 코드는 작동하지 않는다. 함수에 접근하기 위한 키가 필요하다.

// const person3 = {
//     () => console.log("Hello"),
// };

const person4 = {
    greet: () => console.log("Hello"),
};

person4.greet();