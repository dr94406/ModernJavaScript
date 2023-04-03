/*
Promise.resolve()와 Promise.reject()는 자동으로(즉시) 성공하거나 실패하는 프로미스를 생성한다.
*/

//Promise.resolve()
Promise.resolve('Success').then(function(value) {
    console.log('Success');
    //Success
}, function(value) {
    console.log('fail')
});

// Promise.reject()

Promise.reject(new Error('fail')).then(function () {
    // not called
}, function(error) {
    console.log(error);
    // Error: fail
});

