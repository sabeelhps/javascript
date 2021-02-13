
// Higher Order Functions in JS

function Fun(b) {
    
    b();

    function innerFun() {
        console.log('Hello From Inner Fun');
    }

    return innerFun;
}

function f() {
    console.log('Hello from function f');
}

let x = Fun(f);
x();
