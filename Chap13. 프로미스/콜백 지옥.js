/*
비동기 코드를 동기식으로 작동하는 것처럼 하기 위해 콜백으로 여러 코드 블록을 차례로 연결해 작성할 때 발생하는 상황을 콜백지옥 이라고 부르기도 한다.
A -> A(Complete) ... B -> B(Complete) ... C -> C(Complete)... 
*/

// CallBackHell 예제

const makePizza = (ingredients, callback) => {
    mixIngredients(ingredients, function(mixIngredients)){
        bakePizza(mixIngredients, function(bakePizza)) {
            console.log('finished!');
        }
    }
};

/*
프로미스는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체이다, 직접 프로미스를 하나 만들어보자.
*/

const myPromise = new Promise((resolve, reject) => {
    // 여기에 코드를 작성
});

/*
이런식으로 프로미스를 만든 후, 프로미스의 성공을 알리기 위해 resolve를, 실패를 알리기 위해서는 reject를 호출하면 된다.
*/

const mePromise = new Promise((resolve, reject) => {
    resolve("The value we get from the promise");
});

mePromise.then(
    data => {
        console.log(data);
    });
 // The value we get from the promise

 /*
 resolve 함수의 첫 번째 매개변수로 전달된 값이 콘솔에 출력되는 것을 확인할 수 있다.
 setTimeout()을 사용하면 resolve가 호출되기 전까지 일정 시간을 기다릴 수 있다.
 */

 const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The value we get from the promise");
    }, 2000);
 });

 myPromise2.then(
    data => {
        console.log(data);
    });
    // 2초가 지난 후 ...
    // The value we get from the promise

    /*
    프로미스는 많은 비동기 코드를 수행할 때 매우 유용하다 
    이 예에서는 간단하게 resolve를 호출하여 프로미스가 성공하는 경우만 살펴봤지만
    실제로는 오류도 발생하므로, reject를 이용한 오류 처리 방법도 살펴보자.
    */

    const myPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("this is our error"));
        }, 2000);
    });

    myPromise3.then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    // Error:this is our error
    // Stack trace:
    // myPromise3</@debugger eval code:3:14

    /*
    프로미스가 성공할 때의 값을 얻는 데에 .then()을 사용하고 실패할 때의 오류처리에는 .catch()을 사용한다.
    오류 로그를 보면 발생 위치를 알 수 있다. 이는 단순하게 에러라고 작성하지 않고 new Error 객체를 만들어 줬기 때문이다.
    */
