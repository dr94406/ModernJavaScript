// 프록시는 매우 유용하다. 일례로, 데이터를 검증하는 데 사용할 수 있다.

const validateAge = {
    set: function(object, property, value) {
        if(property ==='age') {
            if(value < 18) {
                throw new Error('you are too young! ');
            }
            else {
                // 기본 동작
                object[property] = value;
                return true;
            }
        }
    }
};


const user = new Proxy({}, validateAge);

user.age = 17;
// Uncaught Error: you are too young!

user.age = 21;
// 21

/*
user 객체의 age 속성을 설정할 때마다 validateAge 함수가 실행되어  age 속성의 값이 18보다 작은 경우 오류를 발생시킨다. 
프록시는 동일한 내용의 게터세터를 많은 속성에 적용해야 할 때 유용하다. 이럴때 프록시를 쓰면 한 가지의 게터세터만 정의하면 된다.
*/

const dog = {
    _name: 'pup',
    _age: 7,

    get name() {
        console.log(this._name);
    },
    get age() {
        console.log(this._age);
    },

    set name(newName) {
        this._name = newName;
        console.log(this._name);
    },
    set age(newAge) {
        this._age = newAge;
        console.log(this._age);
    },
};

dog.name;
// pup
dog.age;
//7
dog.breed;
//undefined
dog.name ='Max';
//Max
dog.age = 8;
// 8

/*
잠시 _name, _age를 사용했다. _기호는 프라이빗 속성을 의미한다. 즉 클래스 내부에서만 접근 가능. 문법상으론 강제시되지 않는것이다.
또한 예를 들어 다음과 같은 형태로 함수가 작성되면 this.name은 세터를 다시 호출하므로 무한루프가 발생한다. 이 때 _을 사용하여 문제를 피한다.
*/


set name(newName) {
    this.name = newName;
}

set rename(newName) {
    this.name = newName;
}


// 프록시 사용

const dog = {
    name: 'pup',
    age: 7,
};
const handler = {
    get: (target, property) => {
        property in target ? console.log(target[property]) : console.log('property not found');
    },
    set: (target, property, value) => {
        target[property] = value;
        console.log(target[property]);
    },
};

const dogProxy = new Proxy(dog, handler);

dogProxy.name;
// pup
dogProxy.age;
// 7
dogProxy.name = 'Max';
// Max
dogProxy.age = 8;
// 8
dogProxy.breed;
/// property not found

/*
하나의 게터와 세터로 모든 속성을 처리할 수 있게 handler 생성 
*/