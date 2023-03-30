// Array.find()는 제공된 테스트 함수를 충족하는 배열의 첫 번째 요소를 반환, 원소가 없다면 undefined

const array = [1,2,3,4,5];

// 배열의 원소 중 3보다 큰 첫 원소 반환
let found = array.find(e => e > 3);
console.log(found);
// 4