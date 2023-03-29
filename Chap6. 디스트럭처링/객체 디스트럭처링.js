// 과거 방식 

var person = {
    first: "Alberto",
    last: "Montalesi"
};

var first = person.first;
var last = person.last;

// ES6 이후 방식

const persons = {
    first: "Alberto",
    last: "Montalesi"
};

const {first, last} = persons;

// 디스트럭처링을 이용하여 person이 가진 속성에 접근함과 도시에 해당 속성 이름으로 변수 선언이 가능.


// 다음과 같이 중첩된 객체 형태로 데이터가 주어진 경우에도 동일한 방법을 적용 가능.

const persons2 = {
    name: "Alberto",
    last: "Montalesi",
    links: {
        social: {
            facebook: "https://www.facebook.com/alberto.montalesi",
        },
        website: "https://albertotalesi.github.io/",
    },
};

const {facebook} = persons2.links.social;

// 변수의 이름을 객체의 속성과 동일하게 지정하는 데 그치지 않고, 다음과 같이 변수 이름을 바꿀 수도 있다.

const {facebook: fb} = persons2.links.social;
// persons.links.social.facebook 이란 프로퍼티를 찾아 fb라는 변수로 명명
console.log(fb); // "https://www.facebook.com/alberto.montalesi"
console.log(facebook); // ReferenceError: facebook is not defined

/* 이 코드는 const {facebook: fb} 식의 문법을 사용하여 persons.links.social 객체의 facebook을 대상으로 지정하고
const 변수를 fb라고 명명함, 변수명이 facebook이 아니기 때문에 facebook을 출력하려 하면 오류 발생 */   

// 변수를 다시 fb로 다시 명명하고 기본값을 설정한다

const {facebook: fb2 = "https://www.facebook.com"} = person.links.social;

