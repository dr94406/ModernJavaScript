// 클래스 생성 방법은 두가지, 선언과 표현식이다.

// 클래스 선언 
class Person {

}

// 클래스 표현식
const person = class Person { 
    
};

/*
클래스 선언 및 클래스 표현식은 호이스팅되지 않는다. 클래스에 접근하기 전에 
클래스 선언을 하지않으면 ReferenceError가 발생한다.
또한 클래스에 생성자 메서드가 두 개 이상 포함된 경우 SyntaxError가 발생한다.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    } // 메서드와 메서드 사이에는 쉼표가 X 
    farewell() {
        console.log("goodbye friend");
    }
}

const alberto = new Person("Alberto", 26);

alberto.greet();
// Hi, my name is Alberto and I'm 26 years old
alberto.farewell();
// goodbye friend

// 보다시피 모든 것이 이전과 동일하게 작동한다. 앞에서 언급했듯 클래스는 프로토타입 방식을 대신하는 문법적 설탕일 뿐이다.