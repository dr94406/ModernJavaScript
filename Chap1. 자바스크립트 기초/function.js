function greet(name){
    console.log("hello " + name);
}
greet("Alberto");
// hello Alberto

let myInt = 1;

function increase(value){
    return value +=1;
}

console.log(myInt);
// 1
console.log(increase(myInt));
// 2
console.log(myInt);
// 1

let myCar = {
    maker: "bmw",
    color: "red"
};

console.log(myCar);
// {maker: "bmw", color: "red"}

function changeColor(car){
    car.color= "blue";
}

changeColor(myCar);
console.log(myCar);
// {maker" "bmw", color: "blue"}

const greeter = function greet(name){
    console.log("hello " + name);
};
greeter("Alberto");
// hello Alberto

//anonymous funciton
const greeter2 = function(name){
    console.log("hello");
}
greeter2("Alberto");


//arrow function

const greeter3 = (name) => {
    console.log("hello " + name);
};
greeter3("Alberto");
// hello Alberto