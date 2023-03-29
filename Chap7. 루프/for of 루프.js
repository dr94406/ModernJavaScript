// ES6는 새로운 유형의 루프인 for of 루프를 도입했다. 이를 어떻게 사용하는지 살펴보자.

// 배열에 대한 반복

var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
/*apple
  banana
  orange */

/*이것은 매 반복 시 i가 fruits.length보다 작은 한 i의 값을 1씩 증가시키는 루프이다.

  다음과 같이 for of 루프를 사용하면 동일한 결과를 얻을 수 있다. */

  const fruitsBox = ['apple', 'banana', 'orange'];
  for (const fruitjoin of fruitsBox) {
    console.log(fruitjoin);
  }

  /*apple
  banana
  orange */


  // 객체에 대한 반복, 객체는 이터러블이 아니다. 그러면 객체의 키/값 쌍에 대한 반복은 어떻게 구현할까? 먼저 Object.keys()을 사용하여 모든 객체의 키를 가져오고 반복 수행하며 값에 접근 가능하다.

  const car = {
    maker: "BMW",
    color: "red",
    year: "2010",
  };

  for (const prop of Object.keys(car)){
    const value = car[prop];
    console.log(prop, value);
  }
  // maker BMW
  // color red
  // year 2010

  // 새로운 ES6의 함수인 Object.entries()을 사용하여 객체의 모든 키/값 쌍을 가져온 후에 반복을 수행하는 방법도 있다.

  
