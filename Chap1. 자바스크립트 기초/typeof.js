const str = "hello";
typeof(str);
// "string"

const num = 12;
typeof(num);
// "number"

const arr = [1,2,3];
typeof(arr);
// "object"

const obj = {prop: 'value'};
typeof(obj);
// "object"

// 하나 중요한 점은, 배열은 원시 자료형이 아닌 "객체"이다.

typeof(null);
// "object"
