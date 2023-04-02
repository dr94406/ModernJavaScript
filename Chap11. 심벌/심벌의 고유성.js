/* ES6에서는 심벌이라는 새로운 원시 자료형이 추가되었다. 심벌은 무엇일까 ?
   심벌은 항상 고유하며 객체 속성의 식별자로 사용가능하다. 
*/

const me = Symbol("Alberto");
console.log(me);
// Symbol(Alberto)

// 같은 값을 가진 새로운 심벌을 만나면 어떻게 될까?

const clone = Symbol("Alberto");
console.log(clone);
// Symbol(Alberto)


console.log(me == clone);
// false

console.log(me == clone);
// false

// 두 심벌의 값은 동일하지만, 각 심벌은 항상 고유하므로 다른 심벌과 겹치치 않음.
