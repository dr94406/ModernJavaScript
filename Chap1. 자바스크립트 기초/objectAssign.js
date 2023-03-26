const car = {
color:'red',
};

const secondCar = Object.assign({}, car);
car.wheels = 4;
console.log(car);
// {color: 'red', wheels: 4}
console.log(secondCar);
// {color: 'red}