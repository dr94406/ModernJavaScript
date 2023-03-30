// Array.findIndex()는 조건과 일치하는 첫 번째 원소의 인덱스를 반환한다.
const greetings = ["hello", "hi", "byebye", "goodbye", "hi"];

let foundIndex = greetings.findIndex(e => e ==="hi");
console.log(foundIndex);
// 1, 조건과 일치하는 첫 번째 원소의 인덱스만 반환