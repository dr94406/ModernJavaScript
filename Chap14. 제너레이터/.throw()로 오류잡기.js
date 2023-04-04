function* gen() {
    try {
        yield "Trying...";
        yield "Trying hgarder...";
        yield "Trying even harder..";
    }
    catch(err){ 
        console.log("Errlr: " + err);
    }
}

const myGenerator = gen();
myGenerator.next();
// {value: "Trying...", done: false}
myGenerator.next();
// {value: "Trying harder...", done: false}
myGenerator.throw("ooops");
// Error: ooops
// {value: undefined, done: true}


/* 보다시피 .throw()를 호출했을 때 제너레이터는 오류를 반환했고, 실행할 수 있는 yield가 하나 더 남아 있는데도 종료되었다. */
