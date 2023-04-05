// 세트(집합)란 어떠한 자료형의 값이든 각 원소를 고유하게 저장하는 객체이다.

// 세트 생성
const family = new Set();

// 세트에 값 추가
family.add("Dad");
console.log(family);
// Set {"Dad"}

family.add("Mom");
console.log(family);
// Set {"Dad", "Mom"};

family.add("Son");
console.log(family);
// Set {"Dad", "Mom","Son"};

family.add("Dad");
console.log(family);
// Set {"Dad", "Mom","Son"};

/*
마지막 부분에서 "Dad"를 다시 추가하려고 했지만, Set은 고유한 값만 가질 수 있기 때문에 동일하게 유지된다.
*/

family.size;
// 3

family.keys();
// SetIterator {"Dad", "Mom", "Son"}
family.entries();
// SetIterator {"Dad", "Mom", "Son"}
family.values();
// SetIterator {"Dad", "Mom", "Son"}
family.delete("Dad");
family;
// Set {"Mom", "Son"}
family.clear();
family;
// Set {}


/*
Set에는 size 속성이 있으며 delete를 사용하여 삭제하거나 clear를 사용하여 모든 원소 삭제가능
또한 Set에는 키가 없어서 .keys()를 호출하면 .values()또는 .entries()를 호출하는 것과 동일한 결과를 얻는다.
*/


//Set에 대한 루프

// .next()를 사용하거나 for of 루프를 사용하는 두 가지 방법으로 Set에 대해 반복할 수 있다.

// .next() 사용

const iterator = family.values();
iterator.next();
// {value: "Dad", done:false}
iterator.next();
// {value: "Mom", done:false}


// for of 루프 사용
for(const person of family) {
    console.log(person);
}
// Dad
// Mom
// Son


/* values() 메서드는 제너레이터 함수와 비슷하게 next()를 호출할 수 있는 Iterator 객체를 반환한다.
*/

// 배열에서 중복 제거하기

const myArray = ["dad", "mom", "son", "dad", "mom", "daughter"];

const set = new Set(myArray);
console.log(set);
// Set {"dad", "mom", "son", "daughter"}

// Set를 Array로 반환
const uniqueArray = Array.from(set);
console.log(uniqueArray);
// ["dad","mom","son","daughter"];

// 동일 내용 한 줄로도 작성 가능
const uniqueArray2 = Array.from(new Set(myArray));
// ["dad", "mom", "son", "daughter"]

// 결과를 보면 새로운 배열에는 원래 배열의 고유한 원소만 포함된다.


