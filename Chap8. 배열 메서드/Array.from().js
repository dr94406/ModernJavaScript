/*
Array.from()은 ES6에서 도입한 새로운 배열 메서드들 중 첫 번째이다.
ARray.from()은 배열스러운, 즉 배열처럼 보이지만 배열이 아닌 객체를 받아서 실제 배열로 변환해 반환한다.
*/

/*
HTML
<div class="fruits">
<p> Apple  </p>
<p> Banana </p>
<p> Orange </p>

const fruits = Array.from(document.querySelectorAll(".fruits p"));
const fruitNames = fruits.map(fruit => fruit.textContent);
console.log(fruitNames);
// ["Apple", "Banana", "Orange"]

/*
이와 같이 fruits를 배열로 변환했다. 따라서 map 등 배열이 제공하는 모든 메서드를 사용할 수 있는 상태가 되었다.
전체 태그가 아닌 p 태그의 textContent만 새로운 배열로 만들었다.

또한 Array.from()의 두 번째 인수를 이용해서, 배열에 map 함수를 적용한 것과 동일한기능을 하는 코드를 작성할 수도 있다.
*/

const fruits = document.querySelectorAll(".fruits p");
const fruitArray = Arrayt.from(fruits, fruit => {
    console.log(fruit);
    // <p> Apple </p>
    // <p> Banana </p>
    // <p> Orange </p>
    return fruit.textContent;
    // 태그 자체는 제외하고 태그 안의 텍스트 내용만 얻고자 한다.    
});
console.log(fruitArray);
// ["Apple", "Banana", "Orange"]


