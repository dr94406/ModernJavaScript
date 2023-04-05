// includes() 메서드는 배열에 특정 원소가 포함되어 있으면 true, 아니면 false를 반환한다.

let array = [1,2,4,5];

array.includes(2);
// true

array.includes(3);
// false



// includes()를 인덱스와 함께 사용하기

/*
includes()에 인덱스를 추가해서 원소를 검색할 수 있다. 기본값은 0이지만 음수를 전달할 수도 있다.
includes()에 전달하는 첫 번째 값은 검색할 원소이고, 두 번째 값이 검색을 시작할 인덱스이다.
*/

let arrays = [1,3,5,7,9,11];
// 인덱스 1부터 시작해서 숫자 3을 찾기
arrays.includes(3, 1);
// true
arrays.includes(5,4);
// false

// 배열 끝에서 첫 번쨰 인덱스부터 숫자 1을 찾기
arrays.includes(1, -1);
// false

// 배열 끝에서 세 번째 인덱스부터 숫자 11을 찾기
arrays.includes(11, -3);
//true;
