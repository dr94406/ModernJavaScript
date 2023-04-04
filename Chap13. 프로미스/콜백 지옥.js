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


