// ES6에서는 4가지 새로운 문자열 메서드를 도입함.

/* 1. startsWith()
   2. endsWith()
   3. includes()
   4. repeat()
 */


// startsWith() , 이 메서드는 매개변수로 받은 값으로 문자열이 시작하는지 확인한다.

const code = "ABCDEFG";

code.startsWith("ABB");
// false

code.startsWith("abc");
// false (startsWith는 대소문자를 구별한다)

code.startsWith("ABC");
// true


// 매개변수를 추가로 전달하면 메서드가 검사를 시작하는 시작점을 지정할 수도 있다.

const code2 ="ABCDEFGHI";

code2.startsWith("DEF", 3);
// true (3개 문자를 지나 검사를 시작)


// endsWith() , 이 메서드는 문자열이 우리가 전달한 값으로 끝나는지 확인한다.

const code3 = "ABCDEF";

code3.endsWith("DDD");
// false

code3.endsWith("def");
// false (endWith는 대소문자를 구별한다)

code3.endsWith("DEF");
// true

//추가 매개변수로 문자열의 얼마만큼을 확인할지 길이를 전달할 수 있다.

const code4 ="ABCDEFGHI";

code4.endsWith("EF", 6);
// true (첫 6개 문자인 ABCDEF만을 고려하며, ABCDEF는 EF로 끝나므로)


// includes(), 이 메서드는 우리가 전달한 값이 문자열에 포함되어 있는지 확인한다.

const code5 = "ABCDEF";

code5.includes("ABB");
// flase
code5.includes("abc");
// false (includes는 대소문자를 구별한다.)

code5.includes("CDE");
// true


// repeat() , 이름에서 알 수 있듯이 이 새로운 메서드는 문자열을 반복하며 횟수를 인수로 받는다.

let hello = "Hi";
console.log(hello.repeat(10));
// HiHiHiHiHiHiHiHiHiHiHiHi


//Quiz

let str ="Na";
let bat = "BatMan";

str.repeat(10);
let batman = `${str.repeat(10)} ${bat}`;
console.log(batman);