var x = new Proxy(target, handler);

/*
target은 객체, 함수, 다른 프록시 등 무엇이든 가능
handler는 작업이 수행될 때 프록시의 동작을 정의하는객체 
*/




// 원본 객체
const dog = {breed: "German Shephard", age:5};

// 프록시 객체
const dogProxy = new Proxy(dog, {
    get(target, breed) {
        return target[breed].toUpperCase();
    },
    set(target, breed, value) {
        console.log("changing breed to...");
        target[breed] = value;
    },
});

console.log(dogProxy.breed);
// "GERMAN SHEPHARD"
console.log(dogProxy.breed = "Labrador");
// changing breed to ...
// "Labrador"
console.log(dogProxy.breed);
// "LABRADOR";