const button = docuemnt.querySelector("btn");
button.addEventListener("click", () => {
    // 오류: 여기서 this는 윈도우 객체를 가르킴
    this.classList.toggle("on");
});


const person1 = {
    age: 10,
    grow: function() {
        this.age++;
        console.log(this.age);
    },
};

person1.grow();
// 11

const person2 = {
    age: 10,
    grow: () => {
        // 오류: 여기서 this는 Window 객체를 가리킴
        this.age++;
        console.log(this.age);
    },
};

person2.grow();

// 화살표 함수와 일반 함수의 또 다른 차이점은 arguments 객체에 대한 접근방식

// arguments 객체는 함수 내부에서 접근할 수 있는 배열 객체이며, 해당 함수에 전달된 인수의 값을 담음.

function example() {
    console.log(arguments[0]);
}

example(1,2,3);

// runners 배열 응용

const showWinner = () => {
    const winner = arguments[0];
    console.log(`${winner} was the winner`);
};

showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell");

// ReferenceError: arguments is not defined

// 화살표 함수로 arguments에 접근하는 예시

const showWinner2 = (...args) => {
    const winner = args[0];
    console.log(`${winner} was the winner`);
};
showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell");
// Usain Bolt was the winner


// 위의 함수 예시를 일반 함수로 구현하기

const showWinner3 = function(){
    const winner2 = arguments[0];
    console.log(`${winner2} was the winner`);
};
showWinner2("Usain Bolt", "Justin Gatlin", "Asafa Powell");


// 2.3 코드 변경
function(arg) {
    console.log(arg);
}

function call (arg) {
    console.log(arg);
}
call("arg call");