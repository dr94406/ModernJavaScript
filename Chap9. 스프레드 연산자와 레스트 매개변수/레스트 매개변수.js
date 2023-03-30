// 레스트는 스프레드 문법과 동일하지만, 기능으로는 반대이다. 스프레드는 확장 레스트는 압축이다.

const runners = ["Tom", "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;

console.log(...losers);
// Mark Luke