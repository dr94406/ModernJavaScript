const car = {
    wheels: 4,
    color: "red",
    drive: function(){
        console.log("wroom wroom")
    },
};
console.log(Object.keys(car)[0]);
console.log(typeof Object.keys(car)[0]);
car.drive();