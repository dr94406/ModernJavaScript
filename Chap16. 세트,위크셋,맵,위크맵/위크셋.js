// 위크셋은 세트와 유사하지만 객체만 포함할 수 있다.

let dad = {name: "Daddy", age: 50};
let mom = {name: "Mummy", age: 45};

const family = new WeakSet([dad, mom]);

for (const person of family) {
    console.log(person);
}
// TypeError: family is not iterable

/*
WeakSet은 이터러블이 아니다. 이 예제처럼 WeakSet에 대해 for of 루프를 사용하려고 하면 작동하지 않는 것을 확인할 수 있다.
WeakSet이 포함하는 객체가 가비지컬렉터에 의해 삭제되면 해당 객체는 WeakSet에서도 자동으로 삭제된다.
*/

let daddy = {name: "dad", age: 50};
let mummy = {name: "mom", age: 45};

const parent = new WeakSet([daddy,mummy]);

daddy = null;
console.log(parent);
// WeakSet {{...}, {{...}}

// 몇십 초 정도 기다린 후 다음을 실행하자.
console.log(family);
// WeakSet {{...}}


/*
브라우저 콘솔에서 이 예제를 실행하면, daddy = null이 실행되고 얼마 후에 가비지 컬렉터가 실행되어
family에서 daddy 객체가 제가된 것을 볼 수 있다. 이는 daddy를 null로 설정했을 때 참조가 손실되었기 때문이다.
*/