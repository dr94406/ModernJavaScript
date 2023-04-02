// 기존 클래스로부터 상속된 새로운 클래스를 만드려면 extends 키워드를 사용해야 한다.

// 기존 클래스
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(` Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// 상속을 통해 만든 새 클래스
class Adult extends Person {
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
}

const alberto = new Adult("Alberto", 26, "software developer");

/* Person을 상속하는 Adult 클래스를 만들었지만 이 코드를 실행하려고 하면 오류가 발생한다.
   ReferenceError: must call super constructor before using |this| in Adult class constructor

   오류 메시지의 의미는 새로운 클래스에서 this 사용 전 super()을 호출하라는 내용이다.
   생성자 내부에서 super()을 호출하면 Person이 만들어진다.
   */

        class Adult extends Person {
            constructor(name, age, work){
            super(name, age);
            this.work = work;
    }
}


/*
여기서 왜 super(name, age) 형태로 호출했나? Adult 클래스는 Person으로 부터 이름과 나이를 상속받아서 Person을 다시 선언 및 초기화 할 필요 없다. super() 생성자가 하는 일이 바로 이것이다.
*/

// 기존 클래스
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(` Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// 상속을 통해 만든 새 클래스
class Adult extends Person {
    constructor(name, age, work){
        super(name,age);
        this.work = work;
    }
}

const alberto2 = new Adult("Alberto", 26, "softwaredeveloper");

console.log(alberto.age);
// 26

console.log(alberto.work);
// software developer

alberto.greet();
// Hi, my name is Alberto and I'm 26 years old

// Adult는 Person클래스의 모든 속성과 메서드를 상속했음을 알 수 있다.


