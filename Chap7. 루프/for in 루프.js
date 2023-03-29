/* ES6에서 새로 도입된 루프는 아니지만 for in을 살펴보고 for of와 다른점을 살펴보자.
   for in은 순서없이 객체의 모든 열거 가능 속성을 반복하기에 for of와는 조금 다르다.
   따라서 반복 중에는 객체의 속성을 추가, 수정, 삭제 하지 않는 것이 좋다.*/

   const cars = {
    maker: "BMW",
    color: "red",
    uear: "2010",
   };

   for (const prop in cars) {
    console.log(prop, cars[prop]);
   }
   /* maker BMW
      color red
      year 2010 */


