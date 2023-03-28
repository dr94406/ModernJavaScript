// ES5에서는 HTML 프래그먼트 등에 사용할 여러 줄로 이뤄진 문자열을 다음과 같이 구현했다.

// 각 행 마다 백 슬래시를 삽입해야 함
var text ="hello, \
my name is Alberto \
how are you?\ ";

// ES6에서는 전체를 백틱으로 감싸기만 하면 된다.

const context = `hello, 
my name is Alberto 
how are you ? `;