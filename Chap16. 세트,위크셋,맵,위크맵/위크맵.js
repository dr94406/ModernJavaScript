/*
위크맵은 키/값 쌍의 모음이지만 키는 객체여야만 한다. WeakSet과 유사하게 WeakMap에서도 키(객체)는 약하게 참조된다.
따라서 키로 사용된 객체의 참조가 손실되어 가비지 컬렉터에 의해 수집되면 WeakMap에서도 해당 키/값 쌍이 자동으로 제거된다.
WeakMap은 열거 가능하지 않기 때문에 원소에 반복을 수행하는 것이 불가능하다.
*/

let dad = {name: "Daddy"};
let mom = {name: "Mommy"};

const myMap = new Map();
const myWeakMap = new WeakMap();

myMap.set(dad, "any value");
myWeakMap.set(mom, "any value");

dad = null;
mom = null;

console.log(myMap);
console.log(myWeakMap);
// Map {{...} => "any value"}
// WeakMap {{...} => "any value"}

// 몇십 초 정도 기다린 후 다음을 실행하자.
console.log(myMap);
console.log(myWeakMap);
// Map {{...} => "any value"}
// WeakMap {}

/*
결과를 보면 값을 null로 설정한 객체는 가비지 컬렉터에 의해 수집되기 떄문에
WeakMap에서는 제거되었지만 Map 안에는 남아있다.
*/

