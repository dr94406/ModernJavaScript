// 두 문법의 차이점은 다음 예와 같다.


let list = [4,5,6];

// for... in은 키의 목록을 반환
for (let i in list){
    console.log(i); // "0","1","2",
}


// for ... of는 값을 반환
for (let i of list){
    console.log(i); // 4,5,6
}

// for in은 배열 목록을 반환, for of는 배열의 원소 목록을 반환.


// Quiz 7.1 ES6에 새로 도입된 루프는 무엇인가? for of

// Quiz 7.2 다음 코드의 올바른 출력은 ?

 let people = ["Tom", "Jerry", "Mickey"];

 for (let person of people) {
    console.log(person);
    // Tom Jerry Mickey
 }
