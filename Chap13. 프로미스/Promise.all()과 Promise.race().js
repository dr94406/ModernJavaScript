/*
Promise.all()은 모든 프로미스가 성공할 경우에만 성공하는 하나의
프로미스를 반환한다.
*/

const promise1 = new Promise((resolve, reject => {
    setTimeout(resolve, 500, 'first value');
}));
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second value');
});


promise1.then(data => {
    console.log(data);
});
// 500ms 후
// first value

promise2.then(data  => {
    console.log(data);
});

// 1000ms 후
// second value

// Promise.all()사용

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const promise4 = new Promise((resolve, reject) =>{ 
    setTimeout(resolve, 1000, 'second value');
});

Promise.all([promise3, promise4])
.then(data => {
    const [promise3data, promise4data] = data;
    console.log(promise3data, promise4data);
});
// 1000ms 후
// first value second value


/*
프로미스 중 하나가 실패하면 다른 모든 프로미스가 성공하더라도 해당 실패에서 발생한 오류가 반환된다.
*/

const promise5 = new Promise((resolve, reject) => {
    resolve("my first value");
});
const promise6 = new Promise((resolve, reject) => {
    reject(Error("oooops error"));
});

// .all()은 두 프로미스 중 하나라도 실패하면 전체를 실패로 처리
Promise.all([promise5, promise6])
.then(data => {
    const [promise3data, promise4data] = data;
    console.log(promise3data, promise4data);
})
.catch(err => {
    console.log(err);
});

// Error: oooops error


// 이와 대조적으로, Promise.race()는 이터러블에 포함된 프로미스들 중 가장 먼저 성공 또는 실패한 결과만 반환한다.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second value');
});


Promise.race([promise1, promise2]).then(function(value) {
    console.log(value);
    // 둘 다 성공하지만 promise2가 더 빨리 성공
});
// second value

// 비어있는 이터러블을 전달하면 .race()는 영원히 보류된 상태로 남아 있음에 주의하자.