/* .some()은 조건과 일치하는 원소가 있는지 검색, 첫 번째 일치하는 원소를 찾으면 중지.
   반면 .every()는 모든 원소가 주어진 조건과 일치하는지 여부릃 확인한다.
*/

const array = [1,2,3,4,5,6,1,2,3,1];

let arraySome = array.some(e => e > 2);
console.log(arraySome);
// true

let arrayEvery = array.every(e => e > 2);
console.log(arrayEvery);
// false



