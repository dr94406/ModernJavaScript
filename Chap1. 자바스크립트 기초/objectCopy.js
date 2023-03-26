let car = {
    color: 'red',
};
let secondCar = car;

let car2 = {
    color: 'red',
};
let secondCar2 = car2;

car2.wheels = 4;
console.log(car2);
console.log(secondCar2);