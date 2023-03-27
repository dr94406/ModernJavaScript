console.log(i);
var i = "I am a variable";

// undefined

console.log(j);
let j = "I am a let";

// ReferenceError: can't access lexical declaration 'J before initialization

// var는 정의되기 전에 접근할 수 있지만, 그 값에는 접근할 수 없다. let과 const는 정의하기 전에 접근할 수 없다.

// var는 정의전 접근가능 즉 undefined 값, let은 변수가 선언될때까지 일시적으로 비활성 구역, 즉 TDZ에 존재.


