/*
앞의 예시에서 추가한 greet()와 farewell()메서드는 Person 클래스의 모든 인스턴스에서 접근할 수 있지만, Array.of()처럼 클래스의 인스턴스가 아닌
클래스 자체에서 접근할 수 있는 정적 메서드는 다음과 같이 정의할 수 있다.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static info() {
        console.log(" I am a Person class, nice to meet you");
    }
}
const alberto = new Person("Alberto", 26);

alberto.info();
// TypeError: alberto.info is not a function

Person.info();
// I am a Person class, nice to meet you