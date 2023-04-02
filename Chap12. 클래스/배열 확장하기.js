/*
배열과 비슷하게 생겼지만 첫 번째 값은 교실이름, 나머지는 학생이름과 점수를 나타내는 새로운 클래스를 만들자.
*/


class Classroom extends Array {
    // 레스트 연산자를 사용해 가변 인수로 입력받은 학생들의 정보를 배열 형태로 students에 할당
    constructor(name, ...students) {
        // 스프레드 연산자를 사용해 배열 원소들을 다시 풀어헤쳐 생성자를 호출함.
        // 스프레드 연산자를 사용하지 않으면 '학생들의 정보가 들어 있는 배열'을 원소로 가진 Array가 생성됨.
        super(...students);
        this.name = name;
    }
    // 학생을 추가하기 위한 새로운 메서드를 추가
    add(student){
        this.push(student);
    }
}

const myClass = new Classroom('1A',
{name: "Tim", mark: 6},
{name: "Tom", mark: 3},
{name: "Jim", mark: 8},
{name: "Jon", mark: 10},
);

// 새로운 학생 추가
myClass.add({name: "Timmy", mark:7});
myClass[4];
// {name: "Timmy", mark: 7}

// for of 루프를 사용하여 반복 가능
for (const student of myClass) {
    console.log(student);
}

/*
{name: "Tim", mark: 6}
{name: "Tom", mark: 3}
{name: "Jim", mark: 8}
{name: "Jon", mark: 10}
{name: "Timmy", mark: 7}
*/

