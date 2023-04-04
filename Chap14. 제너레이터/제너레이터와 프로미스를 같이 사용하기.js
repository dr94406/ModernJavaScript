/* 앞서 살펴본 것처럼 프로미스는 비동기 프로그래밍에 매우 유용하며, 제너레이터와 같이 
   사용하면 콜백 지옥 같은 문제를 방지할 수 있는 매우 강력한 도구이다. 
    마치 동기 코드처럼 느껴지게 비동기 코드를 작성할 수 있다.*/

    const myPromise =  () => new Promise((resolve) => {
        resolve("our value is...");
    });

    function* gen() {
        let result = "";
        // 프로미스를 반환
        yield myPromise().then(data => { result = data});
        // 프로미스의 결과를 기다린 후 이 값을 사용
        yield result + ' 2';
    };

    // 비동기 함수를 호출
    const asyncFunc = gen();
    const val1 = asyncFunc.next();

    // {value: Promise, done: false}
    // 프로미스가 완료되기를 기다린 후 .next()를 호출
    val1.value.then(() => {
        console.log(asyncFunc.next());
    });

    //{value: "our value is...2", done: false}

    /*
    .next()를 처음 호출하면 프로미스를 반환한다. 해당 프로미스가 완료되기를 기다렸다가
    .next()를 다시 호출하면 제너레이터 내부에서는 프로미스에서 반환한 값을 사용하여 작업을 수행함
    */

