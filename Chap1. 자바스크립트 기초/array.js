const fruitBasket = ['apple', 'banana', 'orange'];

// 배열의 유용한 메서드

// 길이 체크
console.log(fruitBasket.length);

// 배열의 끝에 새 값을 추가
fruitBasket.push('pear');
console.log(fruitBasket);

// 배열의 시작에 새 값을 추가
fruitBasket.unshift('melon');
console.log(fruitBasket);

// 배열의 끝에서 값 하나를 제거
fruitBasket.pop();
console.log(fruitBasket);

// 배열의 시작에서 값 하나를 제거
fruitBasket.shift();
console.log(fruitBasket);
