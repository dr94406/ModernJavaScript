// 함수 스코프와 this 키워드의 이해
// 스코프는 자바스크립트에서 이해해야 할 가장 중요한 개념이다.
// 전역 스코프는 코드의 어디에서나, 블록 스코프는 변수가 선언된 블록 내부에서만 접근할 수 있다.
// 여기서 서술하는 블록이란 함수,루프 혹은 중괄호 등이 포함된다.



// Var
var myInt = 1;

if(myInt ===1){
    var mySecondInt = 2;
    console.log(mySecondInt);
    // 2
}
console.log(mySecondInt);
    // 2


// Let

var myInt = 1;

if(myInt ===1){
    let mySecondInt = 2;
    console.log(mySecondInt);
    // 2
}
console.log(mySecondInt);
// Uncaught ReferenceError: mySecondInt is not defined


//This 키워드는 스코프에 이어 두 번째로 중요한 개념이다.

const myCar = {
    color: 'red',
    logColor: function(){
        console.log(this.color);
    },
};
myCar.logColor();
// red

function logThis(){
    console.log(this);
}
logThis();
// Window {...}

// 이 함수는 전역 범위에서 호출했으므로 this 값은 Window 객체를 참조함

// 스트릭트 모드(엄격 모드)로 설정하면 실수로 Window 객체를 참조하는 것을 방지할 수 있음.


// this 값 수동 설정(bind)
const myCar2 = {
    color: 'red',
    logColor: function(){
        console.log(this.color);
    },
};

const unboundGetColor = myCar.logColor;
console.log(unboundGetColor());
// undefined
const boundGetColor = unboundGetColor.bind(myCar2);
console.log(boundGetColor());
// red

// this 값 수동 설정(call)

function Car(maker, color){
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color){
    Car.call(this, maker, color);
    this.age = 5;
}

const myNewCar = new MyCar('bmw', 'red');
console.log(myNewCar.carMaker);
// bmw
console.log(myNewCar.carColor);
// red



// this 값 수동 설정(apply)

function Car(maker, color){
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color){
    Car.apply(this, [maker, color]);
    this.age = 5;
}
const myNewCar2 = new MyCar('bmw', 'red');
console.log(myNewCar2.carMaker);
// bmw
console.log(myNewCar2.carColor);
// red 

// 결과는 같지만 apply는 인수 목록이 담긴 배열을 받음.
