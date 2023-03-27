let x = "global";

if (x ==="global"){
    let x = "block-scoped";

    console.log(x);
    // block-scoped
}

console.log(x);
// global

// var 사용의 예
var y = "global";

if( y ==="global"){
    var y = "block-scoped";

    console.log(y);
    // block-scoped
}

console.log(y);

//block-scoped