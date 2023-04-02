
// 세터 및 게터 메서드를 사용하여 클래스 내에 값을 설정하거나 가져올 수 있다.

class Person{
constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.nickname ="";
}
set nicknames(value){
    this.nickname = value;
    console.log(this.nickname);
}
get nicknames() {
    console.log(`Uour nickname is ${this.nickname}`);
    }
}

const alberto = new Person("Alberto", "Montalesi");


// 세터 호출
alberto.nicknames = "Albi";
// "Albi"

// 게터 호출
alberto.nicknames;
// "Your nickname is Albi"
