//  .return()을 사용하여 주어진 값을 반환하고 제너레이터를 종료할 수 있다.

function* fruitList() {
    yield 'Banana';
    yield 'Apple';
    yield 'Orange';
}

const fruits = fruitList();

fruits.return();
// {value: undefined, done:true}


// 이 경우 .return()에 아무것도 전달하지 않았기 때문에 value: undefined를 얻었다.