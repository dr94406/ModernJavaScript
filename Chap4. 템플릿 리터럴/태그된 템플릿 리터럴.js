 //함수를 태그 하여 템플릿 리터럴을 실행하면 템플릿 내부에 있는 모든 항목이 태그된 함수의 인수로 제공된다.
  //작동 방식은 매우 간단하다. 함수 이름을 가져다 실행할 템플릿 앞에 쓰기만 하면 된다.


let person = Alberto;
let age = 25;

function myTag(strings, personName, personAge){ 
     strings [That ,  is a , !]
    let str = strings[1];  is a
    let ageStr;

    personAge  50  ageStr = grandpa  ageStr = youngster;

    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age} !`;

console.log(sentence);
 Alberto is a youngster

  //Quiz 4.1 템플릿 리터럴을 활용하여 변수를 결합하고 출력하도록 구현

let a = Hello, ;
let b = is;
let c = my;
let d = name;
let e = Tom;

  //예상 결과를 얻기 위해 다음 코드를 수정해보자.

let result =`${a} ${c} ${d} ${b} ${e}`;

console.log(result);

  //예상 결과 Hello, my name is Tom

  //Quiz 4.2 템플릿 리터럴을 사용하여 다음 코드를 리팩터링하자.
let a1 = 1;
let a2 = 2;
let c2 = plus;
let d2 = 3;
let e2 = equals;

  //다음 코드에 템플릿 리터럴을 적용해보자.

let result2 = `${a1} ${c2} ${a2} ${e2} ${d2}`;

console.log(result2);


  //Quiz 4.3 템플릿 리터럴을 사용하여 다음 코드를 리팩터링하자.

  //다음 코드에 템플릿 리터럴을 적용해보자.

let str = 'this is a very long textn' +
'a very long text';

console.log(str);


let str2 =`this is a very long text 
           a very long text`;

console.log(str2);